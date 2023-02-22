import "./_home.scss";
import datas from "../../json/apartment";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import imageHome from "../../assets/bannerHome.png"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mainHome">
         <Banner image={imageHome} text="un test exemple 2" />
      <section className="gallery">
        {datas.map((data) => {
        
          return (
            <div class="cardkey" key={data.id}>
            <Link className="link_card_logement" to={"/logement/"+data.id+""} >
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
