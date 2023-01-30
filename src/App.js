import { Header } from './Components/Header';
import { MainContent } from './Components/MainContent';
import { useState } from "react"

export function App() {
    const [darkMode, setDarkMode] = useState(false)
    
    return (
        <div className="container">
            <Header 
                darkMode={darkMode}
            />
            <MainContent 
                darkMode={darkMode}
            />
        </div>
    )
}