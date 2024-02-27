import './sidebar.scss'
import SidebarButton from '../SidebarButton/SidebarButton'
import { GlobalContext } from "../../context"
import { useContext } from "react"

function Sidebar() {

    function notImplemented(){
        alert("Not implemented")
    }

    let { menuState,toggleMenu } = useContext(GlobalContext)
    return <>
        <div className={menuState ? "sidebar active" : "sidebar"}>
            <div className='sidebar-header'>
                <a href='/'><img className="logo" src='../../assets/Sidebar/Dropbox_Icon.svg' /></a>
                <img className="close" src='../../assets/Sidebar/close.svg' onClick={toggleMenu} />
            </div>
            <div>
                <SidebarButton active={true} icon={'../../assets/Sidebar/all-files.svg'} text={"All files"} />
                <SidebarButton onClick={notImplemented} icon={'../../assets/Sidebar/photos.svg'} text={"Photos"} />
                <SidebarButton onClick={notImplemented} icon={'../../assets/Sidebar/shared.svg'} text={"Shared"} />
                <SidebarButton onClick={notImplemented} icon={'../../assets/Sidebar/signatures.svg'} text={"Signatures"} />
            </div>

        </div>
    </>
}

export default Sidebar