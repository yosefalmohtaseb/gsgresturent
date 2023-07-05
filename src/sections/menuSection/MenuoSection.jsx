// MenuoSection.js
import React from 'react';
import Typography from '../../components/typography/Typography';
import MenuoCard from '../../components/menuCard/MenuoCard'; 
import menuoData from '../../assets/data/menuo.json'
import './style.css'
import Container from '../../components/container/Container';

function MenuoSection() {
  return (
<Container variant="container-c">
      <div>
        <Typography>heloo</Typography>
        <Typography variant="typography-s">hello</Typography>
      </div>
      <div className="menu-section">
      <div className="menu-column">
        {menuoData.slice(0, 6).map((item, index) => (
          <MenuoCard
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
      <div className="menu-column">
        {menuoData.slice(6, 12).map((item, index) => (
          <MenuoCard
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
    </Container>
  );
}

export default MenuoSection;
