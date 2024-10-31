import React, { useRef } from 'react';
import Slider from 'react-slick';
import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../media/img/giancarlo.png'; 
import Image2 from '../media/img/matt.png'; 
import Image3 from '../media/img/vincent.png'; 

function CarrosselAtracoes() {
  const sliderRef = useRef(null); // Usar useRef para acessar o slider

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <div className="carouselatracoes-container">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img src={Image1} alt="Imagem 1" />
        </div>
        <div>
          <img src={Image2} alt="Imagem 2" />
        </div>
        <div>
          <img src={Image3} alt="Imagem 3" />
        </div>
      </Slider>

      {/* Botões personalizados */}
      <button
        className="carouselatracoes-button carouselatracoes-prev-button"
        onClick={() => sliderRef.current.slickPrev()}
      >
        Anterior
      </button>
      <button
        className="carouselatracoes-button carouselatracoes-next-button"
        onClick={() => sliderRef.current.slickNext()}
      >
        Próximo
      </button>
    </div>
  );
}

export default CarrosselAtracoes;
