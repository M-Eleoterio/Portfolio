import '../style/prjCard.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink } from "react-icons/fa";

export default function PrjCard(props) {
    return (
        <div className="project-card">
            <img className='card-img' src={props.img || "https://placehold.jp/500x300.png"} alt="" />
            <div className="card-info">
                <h1 className="card-title">{props.title || "Project Name"}</h1>
                <p className="card-tec">Technologies: {props.tec || "Technologies."}</p>
            </div>
            <p className="card-desc">{props.desc || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit, veritatis voluptatum temporibus eaque sapiente, ad sequi labore, nobis numquam maxime harum tenetur architecto. Cupiditate ipsum et mollitia illum maiores."} </p>
            <Link to={props.link || "https://github.com/m-eleoterio"} target='_blank' className="card-btn">
                <FaGithub /> Go to project &#x2192;
            </Link>
            {props.site ?
                <Link to={props.site} target='_blank' className="card-btn"><FaLink /> Go to website &#x2192;</Link>
                : <></>}
        </div>


    );
}