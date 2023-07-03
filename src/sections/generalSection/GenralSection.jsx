import React from "react";
import './style.css'
import Container from "../../components/container/Container";

function GenralSection({ title, subtitle, description, imageSrc }) {
  return (
    <Container>
    <div className="about-main-class">
      <div className="about-msg" >
        <h1>{title}</h1>
        <h2>
          {subtitle}
        </h2>
        <p >
          {description}
        </p>
      </div>
      <div className="about-img">
        <img src={imageSrc} alt="" />
      </div>
    </div>
    </Container>
  );
}


export default GenralSection;