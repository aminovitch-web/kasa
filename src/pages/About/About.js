import imageAbout from "../../assets/bannerAbout.png"
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";

import aboutData from "../../json/aboutdata.json";

import "./_about.scss";

function About() {
  return (
    <div className="about">
      <Banner image={imageAbout} text="" />
      <div className="about__collapse">
        {aboutData.map((data,index) => {
          return (
            <Collapse key={index}  title={data.title} content={data.content} />
          );
        })}
      </div>
    </div>
  );
}

export default About;