import "./breadcrumbs.scss"

function Breadcrumbs() {

    function splitIntoBreadcrumbs(inputString) {
        const parts = inputString.split('/');
        const breadcrumbs = [];

        for (let i = 0; i < parts.length; i++) {

            const decodedPart = decodeURIComponent(parts[i]);
            if (decodedPart !== '') {
                breadcrumbs.push(decodedPart);
            }
        }

        return breadcrumbs;
    }

    function breadcrumbClick(part) {
        let partIndex = parts.indexOf(part)
        let path = parts.filter((p, i) => i <= partIndex).join("/")
        console.log(path);
        window.location.href = `${window.location.origin}?path=/${path}`
    }

    let params = new URLSearchParams(document.location.search);
    let path = params.get("path");

    let parts = path ? splitIntoBreadcrumbs(path) : []

    return <>
        <div className="breadcrumbs">
            {parts.filter((p, i) => i !== parts.length - 1).map(p => <div key={p} onClick={() => { breadcrumbClick(p) }} className="breadcrumb">{p}</div>)}
        </div>
        <div className="folderName">{parts ? parts[parts.length - 1] : "Public"}</div>
    </>
}

export default Breadcrumbs