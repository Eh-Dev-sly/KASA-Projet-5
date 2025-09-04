import data from "../../data/logements.json";
import "../appartement/appartement.scss";
import NavBar from "../../Components/NavBar.jsx";
import Footer from "../../Components/Footer.jsx";
import { useParams } from "react-router-dom";

function Appartement() {
  const { id } = useParams ()
  const logement = data.find(item => item.id === id)
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="kasa-appartement">
              <img src={logement.cover} alt="" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default Appartement;
