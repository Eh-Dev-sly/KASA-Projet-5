import { NavLink } from "react-router-dom";
import logo_NavBar from "../assets/logo/logo_red.svg";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={logo_NavBar} alt="Kasa Logo" className="nav-logo" />
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}  

export default NavBar;