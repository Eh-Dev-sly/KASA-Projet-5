import React from "react";
import logo_footer from "../assets/logo/logo_white.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
        <img src={logo_footer} alt="Kasa Logo" className="footer-logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}  

export default Footer