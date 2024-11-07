import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';
import Image1 from '../media/img/giancarlo.png'; 
import Image2 from '../media/img/matt.png'; 
import Image3 from '../media/img/vincent.png'; 

const images = [
  { src: Image1, alt: 'Imagem 1', description: 'Descrição para Giancarlo' },
  { src: Image2, alt: 'Imagem 2', description: 'Descrição para Matt' },
  { src: Image3, alt: 'Imagem 3', description: 'Descrição para Vincent' }
];

function CarrosselAtracoes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      handleNext();
    } else if (info.offset.x > 100) {
      handlePrev();
    }
  };

  return (
    <div className="carouselatracoes-container">
      <div className="carouselatracoes-slider">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="carouselatracoes-image-container"
            style={{ cursor: 'grab' }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CarrosselAtracoes;