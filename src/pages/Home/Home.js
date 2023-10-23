import React, { useState, useEffect } from "react";
import "./_home.scss";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import imageHome from "../../assets/bannerHome.png";
import { Link } from "react-router-dom";
import { apartmentServices } from "../../services/apartmentServices"; 

export default function Home() {
    const [apartmentsData, setApartmentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        apartmentServices()
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

    return (
        <main className="mainHome">
            <div className="bannerContainer">
                <Banner
                    image={imageHome}
                    text="Chez vous, partout et ailleurs"
                />
            </div>
            <section className="gallery">
                {apartmentsData.map((data) => {
                    return (
                        <div className="cardkey" key={data.id}>
                            <Link
                                className="link_card_logement"
                                to={"/apartment/" + data.id}
                            >
                                <Card
                                    title_apartment={data.title}
                                    img_apartment={data.cover}
                                />
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}
