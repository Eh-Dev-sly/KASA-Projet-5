import React from "react";
import logo_NavBar from "../assets/logo/logo_red.svg";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
        <img src={logo_NavBar} alt="Kasa Logo" className="nav-logo" />
      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">A Propos</a></li>
      </ul>
    </nav>
  );
}  

export default NavBar;