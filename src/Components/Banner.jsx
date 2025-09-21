import "./Banner.scss";

function Banner({ title, imageSrc, altText }) {
  return (
    <div className="banner">
      {title && <h1 className="banner-title">{title}</h1>}
      {imageSrc && <img src={imageSrc} alt={altText || "Bannière"} className="banner-img" />}
    </div>
  );
}

export default Banner;