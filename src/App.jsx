import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleModeToggle =()=>{
    setDarkMode(!darkMode)

  }

  return (
    <div className={`${darkMode? 'dark bg-grey-500 text-white' : 'bg-red-200'}  h-screen`}>
      {
        darkMode? 
        <button onClick={handleModeToggle}>Dark</button>:
        <button onClick={handleModeToggle}>Light</button>
      }
    </div>
  )
}

export default App
