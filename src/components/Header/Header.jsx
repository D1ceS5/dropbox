import "./header.scss"
import { GlobalContext } from "../../context"
import { useContext } from "react"

function Header() {
    let { toggleMenu } = useContext(GlobalContext)
    return <div className="header">
        <img src="../../src/assets/Header/menu-bar.svg" className="burger-menu" onClick={toggleMenu} />
    </div>

}

export default Header