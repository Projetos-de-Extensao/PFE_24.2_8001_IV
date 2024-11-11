import React from "react";
import { motion } from "framer-motion";
import '../index.css';
import Imagem1 from '../media/img/palco-thunder.png';
import Imagem2 from '../media/img/palco-omelete.png';
import Imagem3 from '../media/img/palco-creators.png';

const stages = [
  { id: 1, imagem: Imagem1, titulo: "Palco Principal", subtitulo: "O coração do evento" },
  { id: 2, imagem: Imagem2, titulo: "Palco Arena", subtitulo: "Convidados especiais" },
  { id: 3, imagem: Imagem3, titulo: "Palco Experiência", subtitulo: "Interação com os fãs" },
];



const CarouselPalcos = () => {
  return (
    <div className="carousel-palcos">
      <motion.div 
        className="carousel" 
        drag="x" 
        dragConstraints={{ right: 0, left: -((stages.length - 1) * 100) + '%' }} // Ajustado para 100% da largura
      >
        {stages.map((stage) => (
          <motion.div className="carousel-item" key={stage.id}>
            <img src={stage.imagem} alt={stage.titulo} className="stage-image" draggable="false" />
            <h3>{stage.titulo}</h3>
            <p>{stage.subtitulo}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CarouselPalcos;