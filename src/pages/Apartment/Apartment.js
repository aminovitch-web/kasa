import React, { useState, useEffect } from "react";
import "./_apartment.scss";
import { useParams, Navigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import Collapse from "../../components/Collapse/Collapse";
import Rate from "./../../components/Review/Review";

export default function Apartment() {
    const { productId } = useParams();
    const [apartmentsData, setApartmentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('../apartment.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données.");
                }
                return response.json();
            })
            .then((data) => {
                setApartmentsData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const apartment = apartmentsData.find(
        (apartment) => apartment.id === productId
    );

    if (!apartment) return <Navigate replace to="/Error" />;

    const namelastname = apartment.host.name.split(" ");
    const [name, lastname] = namelastname;

    return (
        <section className="apartment">
            <Slider pictures={apartment.pictures} />
            <div className="apartment__content">
                <div className="apartment__informations">
                    <h1 className="apartment__title">{apartment.title}</h1>
                    <p className="apartment__location">{apartment.location}</p>
                    <div className="apartment__tags">
                        {apartment.tags.map((tag) => (
                            <div className="tag" key={tag}>
                                <p className="tag__text">{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="apartment__HostRating">
                    <Rate rating={apartment.rating} />
                    <div className="host">
                        <div className="host__name">
                            <p>{lastname}</p>
                            <p>{name}</p>
                        </div>
                        <img
                            src={apartment.host.picture}
                            alt={name}
                            className="host__picture"
                        />
                    </div>
                </div>
            </div>
            <div className="apartment__dropdowns">
                <div className="apartment__collapses">
                    <Collapse
                        title="Description"
                        content={apartment.description}
                    />
                </div>
                <div className="apartment__collapses">
                    <Collapse
                        title="Equipements"
                        content={apartment.equipments.map(
                            (equipment, index) => (
                                <li
                                    className="apartment__dropdowns__list"
                                    key={index}
                                >
                                    {equipment}
                                </li>
                            )
                        )}
                    />
                </div>
            </div>
        </section>
    );
}
