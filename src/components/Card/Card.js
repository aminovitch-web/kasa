import { Link } from "react-router-dom"
import "./_card.scss"

export default function Card({img_apartment, title_apartment,  }) {
	return (


		<article className="cardApartment">
			<img src={img_apartment} alt="location" />
			<div className="cardApartment__textcontainer">
				<p className="cardApartment__title">{title_apartment}</p>
			</div>
		
		</article>
        
	);
}