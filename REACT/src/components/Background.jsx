// Background.js
import React from 'react';
import '../index.css';
import backgroundImage from '../media/img/meuperfil_background.png'; // Importando a imagem

const Background = () => {
  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>

    </div>
  );
};

export default Background;
