
const BASE_URL = 'https://api.dropboxapi.com/2/';

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
  const downloadUrl = `https://content.dropboxapi.com/2/files/download`;

  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  headers.append('Dropbox-API-Arg', JSON.stringify({ path: fileUrl }));

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
      const a = document.createElement('a');
      a.style.display = 'none';
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = name;
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

export async function Auth() {
  const url = 'https://api.dropbox.com/oauth2/token';

  const refresh_token = import.meta.env.VITE_REFRESH_TOKEN;
  const grant_type = 'refresh_token';
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;

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

