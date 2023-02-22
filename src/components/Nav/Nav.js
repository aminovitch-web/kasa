import { Link } from "react-router-dom";
import "./_nav.scss";

export default function Nav() {
	return (
		<nav className="navContainer">
			<ul>
				<li>
			<Link to="/" className="navContainer__home">
				Accueil
			</Link>
			    </li>
				<li>
			<Link to="/about" className="navContainer__about">
				A Propos
			</Link>
			</li>

			</ul>
		</nav>
	);
}