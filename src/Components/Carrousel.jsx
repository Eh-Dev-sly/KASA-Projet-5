import React,  { useState } from "react";
import prevImage from "../assets/icons/bck_arrow.svg";
import nextImage from "../assets/icons/fwd_arrow.svg";
import "./Carrousel.scss";

function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((nextIndex) => (nextIndex === pictures.length - 1 ? 0 : nextIndex + 1));
  };

  return (
    <div className="carrousel">
      <img src={pictures[index]} alt="Appartment" className="carrousel_pictures"/>
  {pictures.length > 1 && (
    <>
      <button onClick={prev}>
        <img src={prevImage} alt="Previous" />
      </button>
      <button onClick={next}>
        <img src={nextImage} alt="Next" />
      </button>

      <p className="carrousel-counter">
        {index + 1}/{pictures.length}
      </p>
    </>
  )}
    </div>
  );
}

export default Carrousel;
