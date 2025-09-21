import NavBar from "../NavBar.jsx";
import { Link } from "react-router-dom";
import logo_404 from "../../assets/logo/404.svg";
import Footer from "../Footer.jsx";
import "./error.scss";

function Error() {
    return (
        <div className="error">
            <header>
                <NavBar />
            </header>

            <div className="error_content">
                <img src={logo_404} alt="Logo d'erreur 404" />
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}


export default Error