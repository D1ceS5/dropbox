
const BASE_URL = 'https://api.dropboxapi.com/2/';


// Function to list all files in a folder
export async function listFiles(folderPath) {
  let token = await Auth()
  const headers = {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json',
  };
  const data = {
    'path': folderPath,
    'recursive': false,
    'include_media_info': true,
    'include_deleted': false,
    'include_has_explicit_shared_members': false,
    'include_mounted_folders': true,
    'include_non_downloadable_files': false,
  };
  let response = await fetch(`${BASE_URL}files/list_folder`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });
  console.log("Response", response);
  let responseData = await response.json();
  let files = responseData.entries;
  while (responseData.has_more) {
    const cursor = responseData.cursor;
    response = await fetch(`${BASE_URL}files/list_folder/continue`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ cursor: cursor }),
    });
    responseData = await response.json();
    files = files.concat(responseData.entries);
  }
  return files;
}

export async function download(fileUrl, name) {
  let token = await Auth()
  // Construct the URL for the Dropbox API's download endpoint
  const downloadUrl = `https://content.dropboxapi.com/2/files/download`;

  // Set up the request headers
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  headers.append('Dropbox-API-Arg', JSON.stringify({ path: fileUrl }));

  // Make the request
  fetch(downloadUrl, {
    method: 'POST',
    headers: headers,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.blob();
    })
    .then(blob => {
      // Create a temporary anchor element
      const a = document.createElement('a');
      a.style.display = 'none';
      document.body.appendChild(a);

      // Create a URL for the blob and set the anchor's href attribute
      const url = window.URL.createObjectURL(blob);
      a.href = url;

      // Set the download attribute to specify the filename
      a.download = name;

      // Programmatically click the anchor to start the download
      a.click();

      // Clean up by removing the anchor and revoking the URL
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

export async function Auth() {
  const url = 'https://api.dropbox.com/oauth2/token';
  
  const refresh_token = import.meta.env.VITE_REFRESH_TOKEN//'HHl3HIOwCrgAAAAAAAAAAZ7zEKRpbHLauUOdPtIGZXYAzokqvq5xr0W0dW_E1oKh';
  const grant_type = 'refresh_token';
  const client_id = import.meta.env.VITE_CLIENT_ID//'8n7x8tjow853m1t';
  const client_secret = import.meta.env.VITE_CLIENT_SECRET//'ttnog2eah7onqf2';

  let data = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      refresh_token,
      grant_type,
      client_id,
      client_secret,
    }),
  })
    .then(response => response.json())
  return data.access_token
}

