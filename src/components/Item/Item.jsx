import "./item.scss"
import { download } from "../../API/dropbox";

function Item({ file, viewData }) {

    const { icon, name, extension, size, modified, type } = viewData
    const { id, tag, path_display } = file

    function itemClick() {
        if(tag === "file") download(id, name)
        else if (tag) {
            window.location.href = `${window.location.origin}?path=${path_display}`
        }
    }

    function addDefaultSrc(ev) {
        ev.target.src = '../../public/assets/Files/unknown.svg'
    }

    return <div className={type} onClick={itemClick}>
        <div className="item-name">
            {icon ? <img className="item-icon" onError={addDefaultSrc} src={icon} /> : null}
            <span>{name}</span>
        </div>
        <span className="item-extension">{extension}</span>
        <span className="item-size">{size}</span>
        <span className="item-modified">{modified}</span>
    </div>
}

export default Item