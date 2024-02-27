import "./searchbar.scss"
import { GlobalContext } from "../../context"
import { useContext } from "react"

    
function Searchbar(){
    let { searchQuery,changeQuery } = useContext(GlobalContext)

    function onSearchInput(e){
        changeQuery(e.target.value.toLowerCase())
    }

    return <input className="searchbar" placeholder="Search" value={searchQuery || ""} onInput={onSearchInput} />
}

export default Searchbar