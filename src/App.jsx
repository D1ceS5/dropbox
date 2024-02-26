import { useEffect, useState } from 'react'

import Sidebar from './components/Sidebar/Sidebar'
import ContentWindow from './components/ContentWindow/ContentWindow'
function App() {
 

  return (
    <div style={{display:"flex",flexDirection:"row"}} >
      <Sidebar />
      <ContentWindow />
    </div>
  )
}

export default App
