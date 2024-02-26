import "./item.scss"
import { download } from "../../API/GetList";





function Item({ file, viewData }) {

    const { icon, name, extension, size, modified, type } = viewData
    const { id, tag } = file

    function itemClick() {
        if(tag === "file") download(id, name)
        else console.log("Folder");
    }

    function addDefaultSrc(ev) {
        ev.target.src = '../../src/assets/Files/unidentified-file-type.png'
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