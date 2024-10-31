// SectionRight.js
import React from 'react';
import '../index.css';
import Image from '../media/img/ccxp-guide-foto.png';
import IconSvg from '../media/svg/bussola.svg'

function SectionRight() {
  return (
    <div className="section-container section-right">
      <div className="section-content">
        <div className="text-content">
          <div className='link-wrapper'>
          <h1>O que é o CCXP Guide?</h1>
          <p>
          Todos os anos, quando a CCXP (Comic Con Experience) acontece em São Paulo, a cidade se transforma em um verdadeiro polo de cultura pop, recebendo milhares de visitantes de diversas partes do Brasil e do mundo. No entanto, sem as informações adequadas, a experiência pode se tornar desafiadora em certos momentos, desde a logística de deslocamento até a escolha de acomodações e atrações turísticas.
          </p>
          <p>
          Com isso em mente, este site foi desenvolvido para enriquecer a experiência de todos os participantes da CCXP 2024. Nele, você encontrará uma gama completa de informações sobre o evento, incluindo horários, atrações, palestras, convidados especiais e muito mais. Além disso, o site oferece orientações úteis para garantir uma estadia confortável e bem organizada na vibrante cidade de São Paulo.
          </p>
          <div className='icon-svg'>
        <img src={IconSvg} alt="Ícone" className="icon-svg" />
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

export default SectionRight;
