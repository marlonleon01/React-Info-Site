import logo from './imgs/React-logo.png'

export function MainContent() {
    return (
        <div className="main-content">
            <h1>Fun facts about React</h1>
            <ul className="unorder-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={logo} className="big-react-logo" ></img>
        </div>
    )
}