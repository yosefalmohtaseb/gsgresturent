import React from "react";
import Container from "../../components/container/Container";
import data from "../../assets/data/special.json";
import SpecialCard from "../../components/specialCard/SpecialCard";
import './style.css'


function SpecialSection() {
  return (
    <Container variant="container-95">
      <div>
        <div>
          <h1>Special</h1>
          <p>What Make Us Special</p>
        </div>
        <div className="special-cards">
          {data.map((item, index) => (
            <SpecialCard
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default SpecialSection;
