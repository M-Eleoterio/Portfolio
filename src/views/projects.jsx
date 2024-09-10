import { useNavigate, Link } from "react-router-dom"
import '../style/projects.css'
import Header from "../components/header";
import PrjCard from "../components/prjCard";
export default function Projects() {
    return (
        <div id="projects">
            <Header />
            <h1 id="projects-title">PROJECTS.</h1>
            <PrjCard 
                title="PixelCat" 
                link="https://github.com/mrlmurilo/PixelCat" 
                desc="PixelCat é um site de compras de jogos através do sistema de keys. A principal proposta do mesmo é ser um site simples, intuitivo e visualmente agradável tanto para aqueles que já estão no mundo dos jogos digitais a muito tempo quanto para aqueles que estão por adentrar um novo mundo." 
                img="/img/pixelcat.png"
                tec="Node.JS, Express, SQL, HTML, CSS"
                />
            <PrjCard 
                title="Future.AI"
                link="https://github.com/M-Eleoterio/FutureAI-Landing-Page"
                img="/img/futureAI.png"
                desc="Landing Page de uma empresa ficcional de venda de APIs alimentadas por IA. Projeto realizado em 3 horas para desafio da EuroSkills. Site responsivo."
                site="https://m-eleoterio.github.io/FutureAI-Landing-Page/"
                tec="HTMl, CSS"
            />
            <PrjCard 
                title="Tokenize"
                link="https://github.com/M-Eleoterio/Tokenize"
                desc="Uma aplicação web desenvolvida para gerar e gerenciar tokens de API de forma segura e eficiente. O projeto foi desenvolvido tendo em base também um teste da EuroSkills 2023, utilizando Laravel como backend, mas também como serviço de entrega de páginas usando o Blade. Suas funcionalidades foram desenvolvidas em 4 horas."
                img="/img/tokenize.png"
                tec="Laravel, Blade, SQL, HTML, CSS"
            />
            <PrjCard 
                title="SocialMedia"
                desc="Um clone simples do site do Instagram com foco em melhorar a utilização e conexão do Laravel como backend/API e React como frontend."
                link="https://github.com/M-Eleoterio/social-media"
                tec="React, Axios, Laravel, SQL"
                img="/img/socialmedia.png"
            />
        </div>
    )
}