import { useState } from "react";
import descArrow from "../assets/icons/arrow.svg";
import "./Collapse.scss";

function Collapse({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse_button">
      <div className="button_content">
        <p>{title}</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img
            src={descArrow}
            alt="Bouton"
            style={{
              transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
              transition: "0.3s",
            }}
          />
        </button>
      </div>
      <div className={`collapse_desc ${isOpen ? "open" : ""}`}>{children}</div>
    </div>
  );
}

export default Collapse;
