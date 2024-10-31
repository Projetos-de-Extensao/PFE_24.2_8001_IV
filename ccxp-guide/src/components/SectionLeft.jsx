import React from 'react';
import '../index.css';
import Image from '../media/img/sp-expo-mapa.png';
import IconSvg from '../media/svg/loc.svg';

function SectionLeft() {
  return (
    <div className="section-container section-left">
      <div className="section-content">
        <div className="image-content">
          <img src={Image} alt="São Paulo expo" />
        </div>
        <div className="text-content">
          <h1>São Paulo Expo:</h1>
          <p>
          O São Paulo Expo é um dos principais centros de eventos da América Latina, destacando a cidade de São Paulo como um destino de renome mundial para o turismo de negócios e entretenimento. Com uma infraestrutura moderna e de alta capacidade, o expo oferece um espaço versátil que se adapta a uma variedade de eventos, desde feiras e convenções até shows e exposições internacionais.
          </p>
          <p>
          Sua localização estratégica, aliada a um serviço de hospitalidade exemplar, proporciona uma experiência única para visitantes e organizadores. O ambiente arrojado do São Paulo Expo combina conforto incomparável com as mais recentes inovações em tecnologia e design, tornando-o um local ideal para eventos de grande porte.
          </p>
       
          <div className="link-wrapper">
            <img src={IconSvg} alt="Ícone" className="icon-svg" />
            <a href="https://www.saopauloexpo.com.br/pt/" className="styled-link">
              Acesse aqui!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionLeft;
