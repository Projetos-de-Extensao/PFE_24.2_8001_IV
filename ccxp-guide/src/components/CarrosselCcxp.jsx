import React, { useState, useEffect } from 'react';
import '../index.css';
import { motion, AnimatePresence } from 'framer-motion';
import Image1 from '../media/img/carrossel-01.png';
import Image2 from '../media/img/carrossel-02.png';
import Image3 from '../media/img/carrossel-03.png';
import Image4 from '../media/img/carrossel-04.png';

const images = [Image1, Image2, Image3, Image4];

function CarrosselCcxp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Alterando o intervalo para 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-ccxp-container">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="carousel-image-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
        </motion.div>
      </AnimatePresence>
      <div className="carousel-ccxp-text">
        <h2>CCXP 2024:</h2>
        <p>
          A CCXP é um multiverso para chamar de seu, um lugar onde todos os crossovers são possíveis e reais. Aqui, os momentos épicos estão por toda parte. Uma hora você está explorando seus universos favoritos em ativações de tirar o fôlego, e de repente, BOOM, em questão de alguns passos, você encontra uma lenda dos quadrinhos no Artists' Valley.
          Andar pelo pavilhão é esperar o inesperado. Colecionáveis exclusivos, painéis que chutam bundas, anúncios inéditos, cosplays, campeonatos de eSports, shows ao vivo… as possibilidades são infinitas.
        </p>
      </div>
    </div>
  );
}

export default CarrosselCcxp;
