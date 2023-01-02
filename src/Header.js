import logo from './imgs/React-logo.png'

export function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="small-react-logo"></img>
                <span className="react-facts-title">ReactFacts</span>
                <span className="react-course-description">React Course - Project 1</span>
            </nav>
        </header>
    )
}