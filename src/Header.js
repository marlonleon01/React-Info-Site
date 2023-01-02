import logo from './imgs/React-logo.png'

export function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="react-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}