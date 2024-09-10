import '../style/contact.css'
import Header from "../components/header";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
export default function Contact() {
    return (

        <div id="contact">
            <Header />
            <h1 className="contact-title">CONTACT.</h1>
            <a href='/cv.pdf' className='card-btn' download="CV-Miguel-Eleoterio" id="cv-btn">Baixar currículo</a>
            <div className="project-card" style={{ minHeight: "350px" }}>
                <h1>Redes Sociais</h1>
                <ul>
                    <li>
                        <Link to="https://www.linkedin.com/in/miguel-eleoterio-vieira-206112250/" className='link'>
                            <FaLinkedin /> Linkedin
                        </Link>
                    </li>

                    <li>
                        <Link to="https://github.com/m-eleoterio" className='link'>
                            <FaGithub /> Github
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}