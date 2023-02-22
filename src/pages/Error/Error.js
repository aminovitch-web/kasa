
import "./_error.scss";
import { Link } from "react-router-dom";
const Error = () =>{
   
    return(
        <div className="containerError">
			<h2 className="containerError__information">404</h2>
			<p className="containerError__text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="containerError__link">
				Retourner sur la page d’accueil
			</Link>
		</div>

    );
       
}

export default Error;