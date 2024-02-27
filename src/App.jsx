import { useEffect, useState } from 'react'
import { GlobalContext } from './context'
import Sidebar from './components/Sidebar/Sidebar'
import ContentWindow from './components/ContentWindow/ContentWindow'
function App() {

  const [menuState, setMenuState] = useState(false)

  function toggleMenu() {
    console.log("Toggle");
    setMenuState(!menuState)
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }} >
      <GlobalContext.Provider value={{ menuState,toggleMenu }}>
        <Sidebar />
        <ContentWindow />
      </GlobalContext.Provider>

    </div>
  )
}

export default App
