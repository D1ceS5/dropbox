import './sidebar.scss'
import SidebarButton from '../SidebarButton/SidebarButton'
import { GlobalContext } from "../../context"
import { useContext } from "react"

function Sidebar() {
    let { menuState,toggleMenu } = useContext(GlobalContext)
    return <>
        <div className={menuState ? "sidebar active" : "sidebar"}>
            <div className='sidebar-header'>
                <a href='/'><img className="logo" src='../../public/assets/Sidebar/Dropbox_Icon.svg' /></a>
                <img className="close" src='../../public/assets/Sidebar/close.svg' onClick={toggleMenu} />
            </div>
            <div>
                <SidebarButton active={true} icon={'../../public/assets/Sidebar/all-files.svg'} text={"All files"} />
                <SidebarButton icon={'../../public/assets/Sidebar/photos.svg'} text={"Photos"} />
                <SidebarButton icon={'../../public/assets/Sidebar/shared.svg'} text={"Shared"} />
                <SidebarButton icon={'../../public/assets/Sidebar/signatures.svg'} text={"Signatures"} />
            </div>

        </div>
    </>
}

export default Sidebar