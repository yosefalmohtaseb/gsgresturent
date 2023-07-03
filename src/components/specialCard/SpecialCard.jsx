import React from "react";
import './style.css'

const SpecialCard = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SpecialCard;
