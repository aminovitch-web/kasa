import logo from "../../assets/logo.png";
import "./_header.scss";
import Nav from "../Nav/Nav";



export default function Header() {
	return (
		<header className="headerContainer">
			<div className="headerContainer__logo">
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</div>
			<Nav className="navContainer" />
		</header>
		
	);
}