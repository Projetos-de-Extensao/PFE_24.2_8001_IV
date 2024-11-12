import React from 'react';
import '../index.css';
import Image from '../media/img/ccxpcos.jpeg';
import img2 from '../media/img/concurso.jpg';
import img3 from '../media/img/concurso2.jpg';
function AtracoesBloco() {
  return (
    <div className="section-container section-right">
      <div className="section-content">
        <div className="text-content">
          <div className='link-wrapper'>
          <h1>Cosplays</h1>
          <p>
            Encontre e tire foto com seus personagems favoritos! Na CCXP recebemos muitos participantes de Cosplay, ja sejam de 
            Animes, Jogos, Series ou Filmes.
          
          </p>

          <div className='icon-svg'>
        
        </div>
        </div>
        </div>
        <div className="image-content">
          <img src={Image} alt="Público na CCXP" />

        </div>
      </div>
    </div>
  );
}

export default AtracoesBloco;
