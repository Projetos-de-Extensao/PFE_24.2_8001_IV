// SectionLeft.js
import React from 'react';
import '../index.css'; 
import Image from '../media/img/sp-expo-foto.png'; 

function SectionLeft ()  {
  return (
    <div className="section-container">
      <div className="section-content">
        <div className="image-content">
          <img src={Image} alt="Público na CCXP" />
        </div>
        <div className="text-content">
          <h1>O que é o CCXP Guide?</h1>
          <p>
            Todos os anos em que ocorre a CCXP em São Paulo, a cidade recebe milhares de visitantes.
            Porém, sem as informações necessárias, a viagem pode se tornar conturbada em certo ponto.
          </p>
          <p>
            Logo, esse site foi desenvolvido para acrescentar na experiência de todos os visitantes da CCXP 2024.
            Nele, além de informações sobre o evento em si, você terá auxílio para uma boa e organizada estadia
            na cidade de São Paulo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionLeft;
