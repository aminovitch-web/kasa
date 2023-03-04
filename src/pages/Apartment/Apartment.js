import "./_apartment.scss";
import { useParams, Navigate } from 'react-router-dom';
import data from "../../json/apartment.json";
import Slider from "../../components/Slider/Slider";
import Collapse from "../../components/Collapse/Collapse";
import Rate from "./../../components/Review/Review";


export default function Apartment() {

  const { productId } = useParams();

  const apartment = data.find((apartment) => apartment.id === productId);

   


  return (
    <>
     {
      apartment ? (

    <section className="apartment">
      <Slider pictures={apartment.pictures} />
      <div className="apartment__content">
        <div className="apartment__informations">
          <h1 className="apartment__title">{apartment.title}</h1>
          <p className="apartment__location">{apartment.location}</p>
          <div className="apartment__tags">
            {apartment.tags.map((tag) => (
              <div className="tag">
              <p className="tag__text">{tag}</p>
            </div>
            ))}
          </div>
        </div>
        <div className="apartment__HostRating">
           <Rate rating={apartment.rating} />
           <div className="host">
      <div className="host__name">
        <p>{apartment.host.name}</p>
        <p>{apartment.host.name}</p>
      </div>

      <img src={apartment.host.picture} alt="" className="host__picture" />
    </div>
        </div>
      </div>
      <div className="apartment__dropdowns">
        <Collapse title="Description" content={apartment.description} />
        <Collapse
          title="Equipements"
          content={apartment.equipments.map((equipment, index) => (
            <li className="apartment__dropdowns__list" key={index}>
              {equipment}
            </li>
          ))}
        />
      </div>
    </section>
          ) : <Navigate replace to="/error"/>
}


    </>
          
  );
}

