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
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <div className="appartement">
          {/* Carrousel */}
          <div className="appartement__image">
            <Carrousel pictures={logement.pictures} />
          </div>

          <div className="laptop_version">
            {/* Titre + Hôte */}
            <div className="appartement__header">
              <div className="appartement__header-info">
                <h1 className="appartement__title">{logement.title}</h1>
                <p className="appartement__location">{logement.location}</p>
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

            {/* Tags + Rating */}
            <div className="tags_rating">
              <div className="appartement_tags">
                {logement.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>

              <div className="rating">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <img
                      src={index < ratingNumber ? activeStart : inactiveStart}
                      alt={`Note de ${ratingNumber} sur 5`}
                      key={index}
                    />
                  ))}
              </div>
            </div>
          </div>
          {/* ------------------------------------------------------------------------------ */}
          <div className="phone_version">
            {/* Titre */}
            <div className="appartement__header">
              <div className="appartement__header-info">
                <h1 className="appartement__title">{logement.title}</h1>
                <p className="appartement__location">{logement.location}</p>
                {/* Tags */}
                <div className="appartement_tags">
                  {logement.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hôte & Rating */}
            <div className="host_rating">
              <div className="rating">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <img
                      src={index < ratingNumber ? activeStart : inactiveStart}
                      alt={`Note de ${ratingNumber} sur 5`}
                      key={index}
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

          {/* Description & Equipements */}
          <div className="description_equipements">
            <div className="description">
              <Collapse title="Description">
                <p>{logement.description}</p>
              </Collapse>
            </div>
            <div className="equipements">
              <Collapse title="Equipements">
                <ul>
                  {logement.equipments.map((equipments, index) => (
                    <li key={index}>{equipments}</li>
                  ))}
                </ul>
              </Collapse>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Appartement;
