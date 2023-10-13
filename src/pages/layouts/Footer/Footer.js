import logoFooter from "../../../assets/logoFooter.png";
import "./_footer.scss"

export default function Footer() {
	return (
		<footer className="containerFooter">
			<img src={logoFooter} alt="logo de kasa" />
			<p className="containerFooter__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}