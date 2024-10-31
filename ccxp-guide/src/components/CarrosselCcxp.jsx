import React from 'react';
import Slider from 'react-slick';
import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../media/img/carrossel-01.png';
import Image2 from '../media/img/carrossel-02.png';
import Image3 from '../media/img/carrossel-03.png';
import Icon1 from '../media/svg/pokemon-trainer.svg';
import Icon2 from '../media/svg/naruto-119_svgrepo.com.svg';
import Icon3 from '../media/svg/avatar-bad-breaking.svg';

function CarrosselCcxp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <div className="icons-container left-icons">
        <img src={Icon1} alt="Ícone 1" />
        <img src={Icon2} alt="Ícone 2" />
        <img src={Icon3} alt="Ícone 3" />
      </div>
      
      <Slider {...settings}>
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
      
      <div className="icons-container right-icons">
        <img src={Icon1} alt="Ícone 1" />
        <img src={Icon2} alt="Ícone 2" />
        <img src={Icon3} alt="Ícone 3" />
      </div>

      <div className="carousel-text">
        <h2>CCXP 2024:</h2>
        <p>
        A CCXP é um multiverso para chamar de seu, um lugar onde todos os crossovers são possíveis e reais. Aqui, os momentos épicos estão por toda parte. Uma hora você está explorando seus universos favoritos em ativações de tirar o fôlego, e de repente, BOOM, em questão de alguns passos, você encontra uma lenda dos quadrinhos no Artists' Valley.
        Andar pelo pavilhão é esperar o inesperado. Colecionáveis exclusivos, painéis que chutam bundas, anúncios inéditos, cosplays, campeonatos de eSports (com "s" maiúsculo e sotaque gringo), shows ao vivo… as possibilidades são infinitas. A única dúvida que resta é:
        </p>
      </div>
    </div>
  );
}

export default CarrosselCcxp;
