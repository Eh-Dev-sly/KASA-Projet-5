import data from "../../data/logements.json";
import "../appartement/appartement.scss";
import NavBar from "../../Components/NavBar.jsx";
import Carrousel from "../../Components/Carrousel.jsx";
import Collapse from "../../Components/Collapse.jsx";
import Footer from "../../Components/Footer.jsx";
import activeStart from "../../assets/icons/star-on.svg";
import inactiveStart from "../../assets/icons/star-off.svg";
import { useParams, Navigate } from "react-router-dom";

function Appartement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" replace />;
  }

  const ratingNumber = Number(logement.rating);
  const {
    host: { name, picture },
  } = logement;

  return (
    <div className="logement">
      {/* Header */}
      <header>
        <NavBar />
      </header>

      {/* Main content */}
      <main>
        <div className="appartement">
          {/* Carrousel */}
          <div className="appartement__image">
            <Carrousel pictures={logement.pictures} />
          </div>

          {/* Header + Tags + Host + Rating */}
          <div className="appartement__info">
            {/* Title, Location & Tags */}
            <div className="appartement__header-info">
              <div className="title_loc">
              <h1 className="appartement__title">{logement.title}</h1>
              <p className="appartement__location">{logement.location}</p>
              </div>

              <div className="appartement_tags">
                {logement.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Host + Rating */}
            <div className="appartement__host-rating">
              <div className="rating">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <img
                      key={index}
                      src={index < ratingNumber ? activeStart : inactiveStart}
                      alt={`Note de ${ratingNumber} sur 5`}
                    />
                  ))}
              </div>

              <div className="appartement__host">
                <p className="appartement__host-name">{name}</p>
                <img
                  className="appartement__host-picture"
                  src={picture}
                  alt={`Photo de profil de l'hôte : ${name}`}
                />
              </div>
            </div>
          </div>

          {/* Description & Equipments */}
          <div className="description_equipements">
            <div className="description">
              <Collapse title="Description">
                <p>{logement.description}</p>
              </Collapse>
            </div>

            <div className="equipements">
              <Collapse title="Equipements">
                <ul>
                  {logement.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Appartement;
