import { useNavigate, Link } from "react-router-dom"
import '../style/projects.css'
import Header from "../components/header";
import PrjCard from "../components/prjCard";
export default function Projects() {
    return (
        <div id="projects">
            <Header />
            <h1 id="projects-title">PROJECTS.</h1>
            <PrjCard />
            <PrjCard />
            <PrjCard />
            <PrjCard />
        </div>
    )
}