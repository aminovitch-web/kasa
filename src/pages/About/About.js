import React, { useState, useEffect } from "react";
import imageAbout from "../../assets/bannerAbout.png";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import { aboutServices } from "../../services/aboutServices"; 
import "./_about.scss";

function About() {
    const [aboutData, setAboutData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        aboutServices()
            .then((data) => {
                setAboutData(data);
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
        <div className="about">
            <div className="bannerContainer">
                <Banner image={imageAbout} text="" />
            </div>
            <div className="about__collapse">
                {aboutData.map((data, index) => {
                    return (
                        <Collapse
                            key={index}
                            title={data.title}
                            content={data.content}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default About;
