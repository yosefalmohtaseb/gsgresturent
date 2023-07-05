import React from "react";
import aboutImage from "../../../public/assets/image/about-section.png";
import './style.css'

function AboutSection() {
  return (
    <div className="about-main-class">
      <div className="about-msg" >
        <h1>About Us</h1>
        <h2>
          Discover the taste of worldclass vegan dishes from the kitchen of Go
          Green Dine
        </h2>
        <p >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptate
          atque quia eaque tempora labore aliquid molestiae. Totam non maiores
          tempore deserunt deleniti illo esse rem nobis minus, odit explicabo?
        </p>
      </div>
      <div className="about-img">
      <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default AboutSection;



