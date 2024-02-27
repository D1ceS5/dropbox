import "./header.scss"
import { GlobalContext } from "../../context"
import { useContext } from "react"
import Searchbar from "../Searchbar/Searchbar"

function Header() {
    let { toggleMenu } = useContext(GlobalContext)
    return <div className="header">
        <img src="../../public/assets/Header/menu-bar.svg" className="burger-menu" onClick={toggleMenu} />
        <Searchbar />
    </div>

}

export default Header