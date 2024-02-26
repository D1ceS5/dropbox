import './sidebarButton.scss'

function SidebarButton({ text, icon, active,onClick }) {
    console.log("Active",active);
    return <div className={active? "sidebarButton active": "sidebarButton"}>
        <img className='sidebarButton-icon' src={icon} />
        <span className='sidebarButton-text' >{text}</span>
    </div>
}

export default SidebarButton