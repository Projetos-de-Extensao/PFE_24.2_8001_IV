import React from 'react';
import '../index.css'; 
import logo from '../media/img/CCXP_2014_alt 1.png';

import youtubeIcon from '../media/icons/youtube.png';
import facebookIcon from '../media/icons/facebook.png';
import instagramIcon from '../media/icons/instagram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="CCXP-Logo" />
        </div>
        <div className="footer-texto">
          <h3>CCXP</h3>
          <p>Inspirada pelas tradicionais Comic Cons dos Estados Unidos, a CCXP se tornou um espaço dedicado a fãs de quadrinhos, cinema, séries, games, literatura e cosplays, além de atrair grandes estúdios e celebridades da indústria do entretenimento.</p>
        </div>
        <div className="footer-texto">
          <h3>Sobre nós</h3>
          <p>Nossa equipe conta com 5 alunos dos cursos Tech da IBMEC. Juntos, nosso objetivo é desenvolver esse site para auxiliar você, visitante da ccxp nos mais variados aspectos necessários.</p>
        </div>
        <div className="footer-links">
          <h3>Redes sociais da CCXP</h3>
          <ul>
            <li>
              <a href="https://www.youtube.com/@ccxpoficial" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="social-icon" /> YouTube
              </a>
            </li>
            <li>
              <a href="https://facebook.com/CCXPoficial/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" className="social-icon" /> Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com/ccxpoficial/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="social-icon" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 CCXP</p>
      </div>
    </footer>
  );
};

export default Footer;
