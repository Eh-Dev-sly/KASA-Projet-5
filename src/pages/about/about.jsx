import NavBar from "../../Components/NavBar.jsx";
import Banner from "../../Components/Banner";
import Collapse from "../../Components/Collapse.jsx";
import Footer from "../../Components/Footer.jsx";
import aboutBanner from "../../assets/media/aboutBanner.png";
import "./about.scss";

function About() {
  return (
    <div className="about">
      <header>
        <NavBar />
        <div className="banner">
        <Banner title="" imageSrc={aboutBanner} altText="Bannière Kasa de la page A propos"/>
        </div>
      </header>
      <main>
        {/* Description & Equipements */}
        <div className="about_collapse">
          <div className="reliability">
            <Collapse title="Fiabilité">
              <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </Collapse>
          </div>
          <div className="respect">
            <Collapse title="Respect">
              <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </Collapse>
          </div>
          <div className="services">
            <Collapse title="Service">
              <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
            </Collapse>
          </div>
          <div className="security">
            <Collapse title="Sécurité">
              <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </Collapse>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default About;
