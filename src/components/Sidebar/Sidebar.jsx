import './sidebar.scss'
import SidebarButton from '../SidebarButton/SidebarButton'
import { GlobalContext } from "../../context"
import { useContext } from "react"

function Sidebar() {
    let { menuState,toggleMenu } = useContext(GlobalContext)
    return <>
        <div className={menuState ? "sidebar active" : "sidebar"}>
            <div className='sidebar-header'>
                <a href='/'><img className="logo" src='../../src/assets/Sidebar/Dropbox_Icon.svg' /></a>
                <img className="close" src='../../src/assets/Sidebar/close.svg' onClick={toggleMenu} />
            </div>
            <div>
                <SidebarButton active={true} icon={'../../src/assets/Sidebar/all-files.svg'} text={"All files"} />
                <SidebarButton icon={'../../src/assets/Sidebar/photos.svg'} text={"Photos"} />
                <SidebarButton icon={'../../src/assets/Sidebar/shared.svg'} text={"Shared"} />
                <SidebarButton icon={'../../src/assets/Sidebar/signatures.svg'} text={"Signatures"} />
            </div>

        </div>
    </>
}

export default Sidebar