import NavBar from "../../Components/NavBar.jsx";
import Banner from "../../Components/Banner";
import Gallery from "../../Components/Gallery.jsx";
import Footer from "../../Components/Footer.jsx";
import homeBanner from "../../assets/media/banner.png";
import "./index.scss";

function Index() {
  return (
    <div className="index">
      <header>
        <NavBar />
        <Banner title="Chez vous, partout et ailleurs" imageSrc={homeBanner} altText="Bannière Kasa de la page d'Accueil"/>
      </header>
      <main>
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Index;
