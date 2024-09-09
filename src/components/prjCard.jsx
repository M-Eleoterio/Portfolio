import '../style/prjCard.css';
import { Link } from 'react-router-dom';

export default function PrjCard(props) {
    return (
        <div className="project-card">
            <img className='card-img' src={props.img || "https://placehold.jp/500x300.png"} alt="" />
            <h1 className="card-title">{props.title || "Project Name"}</h1>
            <p className="card-desc">{props.desc || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio reprehenderit, veritatis voluptatum temporibus eaque sapiente, ad sequi labore, nobis numquam maxime harum tenetur architecto. Cupiditate ipsum et mollitia illum maiores."} </p>
        </div>
    );
}