import "./itemList.scss"
import Item from "../Item/Item"
import { GlobalContext } from "../../context";
import { useContext } from "react";

function convertDate(dateString) {

    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedDate = `${month}/${day}/${year}`;
    const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'pm' : 'am'}`;

    const formattedDateTime = `${formattedDate} ${formattedTime}`;

    return formattedDateTime;
}

function formatBytes(bytes) {
    if (bytes < 1024) {
        return bytes + ' bytes';
    } else if (bytes < 1048576) {
        return (bytes / 1024).toFixed(2) + ' KB';
    } else if (bytes < 1073741824) {
        return (bytes / 1048576).toFixed(2) + ' MB';
    } else {
        return (bytes / 1073741824).toFixed(2) + ' GB';
    }
}

function getFileExtension(fileName) {
    const dotIndex = fileName.lastIndexOf('.');
    if (dotIndex === -1) {
        return '';
    }

    return `${fileName.substring(dotIndex + 1)}`;
}

const iconByTag = {
    folder: "../../assets/Files/regular-folder.png",
    file: (extension) => {
        return `../../assets/Files/${extension}.svg`
    }
}

function ItemList({ items }) {
    let { searchQuery } = useContext(GlobalContext)

    return <div className="itemList">
        <Item file={{}} viewData={{name: "Name",extension:"Extension",size:"Size",modified:"Modified",type:"listHeader"}} />
        {
            items?.filter(f=>f.name.toLowerCase().includes(searchQuery)).map((f) => {
                let icon = iconByTag[f['.tag']]
                let src;
                if (typeof (icon) === 'string') src = icon
                else src = icon(getFileExtension(f.name))


                const viewData = {
                    icon: src,
                    name: f.name,
                    extension: getFileExtension(f.name),
                    size: f.size ? formatBytes(f.size) : "--",
                    modified: f.client_modified ? convertDate(f.client_modified) : "--",
                    type: "item"
                }
                const file = {
                    ...f,
                    tag: f['.tag']
                }

                return <Item key={f.name} viewData={viewData} file={file} />
            })
        }
    </div>
}

export default ItemList