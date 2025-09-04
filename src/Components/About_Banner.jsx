import aboutBanner_img from "../assets/media/aboutBanner.png";
import "./About_Banner.scss";

function AboutBanner() {
  return (
    <div className="banner">
        <img src={aboutBanner_img} alt="Bannière Kasa" className="kasa-banner-img"/>
    </div>
  );
}

export default AboutBanner;