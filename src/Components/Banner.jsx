import React from "react";
import banner_img from "../assets/media/banner.png";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        <img src={banner_img} alt="Bannière Kasa" className="kasa-banner-img"/>
    </div>
  );
}

export default Banner;