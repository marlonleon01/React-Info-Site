import { Header } from './Components/Header';
import { MainContent } from './Components/MainContent';
import { useState } from "react"

export function App() {
    const [darkMode, setDarkMode] = useState(false)
    
    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return (
        <div className="container">
            <Header 
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <MainContent 
                darkMode={darkMode}
            />
        </div>
    )
}