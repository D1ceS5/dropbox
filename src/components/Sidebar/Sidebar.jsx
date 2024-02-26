import './sidebar.scss'
import SidebarButton from '../SidebarButton/SidebarButton'
//import allFiles from "../../src/assets/all-files.svg"
function Sidebar() {
    return <>
        <div className="sidebar">
            <img className="logo" src='../../src/assets/Sidebar/Dropbox_Icon.svg' />
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