import React from 'react';
import '../index.css';
import Imagem1 from '../media/img/cosplay1.png';
import Imagem2 from '../media/img/cosplay2.png';
import Imagem3 from '../media/img/cosplay3.png';
import Imagem4 from '../media/img/cosplaymaster.png';


const CosplayMaster = () => {
  return (
    <div className="cosplay-master">
      {/* Banner */}
      <div className="cosplay-banner">
        <div className="banner-title">
          <img src={Imagem4}></img>
        </div>
      </div>

      {/* Description */}
      <div className="cosplay-description">
        <p>
        O Cosplay Master é o principal concurso de cosplay da CCXP (Comic Con Experience), realizado anualmente durante o evento. Voltado para cosplayers profissionais e amadores, o concurso celebra a arte de se caracterizar como personagens de filmes, séries, animes, quadrinhos e games, destacando a criatividade, o talento e a fidelidade ao personagem.
O concurso possui várias etapas, incluindo pré-seleção e apresentações ao vivo no palco principal da CCXP, onde os participantes são avaliados por um júri especializado, levando em consideração a qualidade do figurino, a interpretação do personagem e a performance geral. Os vencedores recebem prêmios em dinheiro e reconhecimento na comunidade cosplay, além de ter a oportunidade de competir internacionalmente em outros eventos de cultura pop.
O Cosplay Master é um dos destaques do evento, atraindo grande público e promovendo a integração da comunidade cosplay no Brasil. <a href='https://www.ccxp.com.br/concurso-cosplay-master/'>Saiba mais!</a>
        </p>
      </div>

      {/* Image Gallery */}
      <div className="cosplay-gallery">
        <div className="gallery-item">
          <img src={Imagem1} alt="Cosplayer 1" />
        </div>
        <div className="gallery-item">
          <img src={Imagem2} alt="Cosplayer 2" />
        </div>
        <div className="gallery-item">
          <img src={Imagem3} alt="Cosplayer 3" />
        </div>
      </div>
    </div>
  );
};

export default CosplayMaster;
