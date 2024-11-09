// src/components/CarouselPalcos.js
import React from "react";
import { motion } from "framer-motion";
import '../index.css';
import Imagem1 from '../media/img/palco-thunder.png';
import Imagem2 from '../media/img/palco-omelete.png';
import Imagem3 from '../media/img/palco-creators.png';

const stages = [
  { id: 1, image: Imagem1, title: "Palco Principal", subtitle: "O coração do evento" },
  { id: 2, image: Imagem2, title: "Palco Arena", subtitle: "Convidados especiais" },
  { id: 3, image: Imagem3, title: "Palco Experiência", subtitle: "Interação com os fãs" },
];

const CarouselPalcos = () => {
  // Define o limite de arraste com base na largura da tela
  const dragConstraints = window.innerWidth < 768 ? -450 : -((stages.length - 1) * 300);

  return (
    <div className="carousel-palcos">
      <motion.div
        className="carousel"
        drag="x"
        dragConstraints={{ right: 0, left: dragConstraints }}
      >
        {stages.map((stage) => (
          <motion.div className="carousel-item" key={stage.id}>
            <img src={stage.image} alt={stage.title} className="stage-image" draggable="false" />
            <h3>{stage.title}</h3>
            <p>{stage.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarouselPalcos;
