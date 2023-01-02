import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Header';
import { MainContent } from './MainContent';

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)



