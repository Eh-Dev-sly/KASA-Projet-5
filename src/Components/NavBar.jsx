import React from "react";
import logo from "../assets/logo/logo.svg";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="Kasa Logo" className="nav-logo" />
      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">A Propos</a></li>
      </ul>
    </nav>
  );
}  

export default NavBar;