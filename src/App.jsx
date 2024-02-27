import { useEffect, useState } from 'react'
import { GlobalContext } from './context'
import Sidebar from './components/Sidebar/Sidebar'
import ContentWindow from './components/ContentWindow/ContentWindow'
function App() {

  const [menuState, setMenuState] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  function toggleMenu() {
    setMenuState(!menuState)
  }

  function changeQuery(query) {
    console.log(query);
    setSearchQuery(query)
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }} >
      <GlobalContext.Provider value={{ menuState, toggleMenu, searchQuery, changeQuery }}>
        <Sidebar />
        <ContentWindow />
      </GlobalContext.Provider>

    </div>
  )
}

export default App
