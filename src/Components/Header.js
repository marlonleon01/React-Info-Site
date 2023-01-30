import logo from '../imgs/React-logo.png'

export function Header(props) {
    return (
            <nav className={props.darkMode ? "dark": ""}>
                <img src={logo} className="small-react-logo" />
                <h3 className="react-facts-title">ReactFacts</h3>
                <div className="toggler">
                    <p className="toggler-light">Light</p>
                    <div className="toggler-slider" onClick={props.toggleDarkMode}>
                        <div className="toggler-slider-circle"></div>
                    </div>
                    <p className="toggler-dark">Dark</p>
                </div>
            </nav>
    )
}