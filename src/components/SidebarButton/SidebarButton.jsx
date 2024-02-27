import './sidebarButton.scss'

function SidebarButton({ text, icon, active,onClick }) {
    return <div className={active? "sidebarButton active": "sidebarButton"} onClick={onClick}>
        <img className='sidebarButton-icon' src={icon} />
        <span className='sidebarButton-text' >{text}</span>
    </div>
}

export default SidebarButton