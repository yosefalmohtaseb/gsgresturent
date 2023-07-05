import React from "react";

const MenuoCard = ({ imageSrc, title, price, description }) => {
  return (
    <div className="restaurant-card">
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuoCard;
