import { useNavigate, Link } from "react-router-dom"
import '../style/home.css'

export default function Home() {

    const navigate = useNavigate();

    return (
        <div id="home">
            <div id="home-text">
                <h3 id="home-text-subtitle">Hello, my name is</h3>
                <h1 id="home-text-title">&#60;ELEOTÉRIO&#47;&#62;</h1>
            </div>
            <nav class="pages-nav">
                <Link to="/projects" className="link">Projects</Link>
                <Link to="/contact" className="link">Contact</Link>
            </nav>

            <div class="loader">
                <div class="cube">
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                </div>
            </div>
        </div>
    )
}