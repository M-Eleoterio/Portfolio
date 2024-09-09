import '../style/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div id="header">
            <Link style={{ textDecoration: 'none' }} to='/'><h1 id="header-title">&#60;ELEOTÉRIO&#47;&#62;</h1></Link>
            <nav class="pages-nav">
                <Link to="/projects" className="link">Projects</Link>
                <Link to="/contact" className="link">Contact</Link>
            </nav>
        </div>
    );
}