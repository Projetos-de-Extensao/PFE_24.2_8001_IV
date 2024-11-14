import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';
import Imagem1 from '../media/img/palco-thunder.png';
import Imagem2 from '../media/img/palco-omelete.png';
import Imagem3 from '../media/img/palco-creators.png';

const stages = [
  { id: 1, imagem: Imagem1, titulo: "Palco Thunder", subtitulo: "O Palco Thunder é um lugar onde a magia acontece em questão de segundos: você pisca, e um momento épico já tomou conta do ambiente. Este é o palco dos sonhos dos fãs de cultura pop, onde os anúncios mais esperados do ano são revelados, atendendo a cada pedido feito ao longo dos meses. É ali que acontecem as entrevistas exclusivas com os atores, atrizes, produtores e diretores favoritos do público, trazendo a energia inconfundível das grandes estrelas da indústria.Além disso, o Palco Thunder se transforma no ponto de encontro das maiores plataformas de streaming e dos estúdios mais renomados, que reservam suas pré-estreias e conteúdos inéditos especialmente para o público da CCXP. Com uma capacidade para 3.000 pessoas – ou melhor, 3.000 fãs absolutamente apaixonados e entusiastas, vibrando com a intensidade de 7 Gils do Vigor –, estar no Palco Thunder é uma experiência única e arrebatadora. É um espaço onde a paixão pelo universo geek e a energia das multidões se encontram, criando uma atmosfera tão eletrizante que faz cada instante parecer inesquecível." },
  { id: 2, imagem: Imagem2, titulo: "Palco Omelete", subtitulo: 
    "Junte-se ao vivo com a galera do Omelete no ponto de encontro dos maiores nomes de Hollywood, onde o tapete vermelho se estende para dentro da CCXP e o glamour da cultura pop toma conta. O Palco Omelete é uma arena aberta, sem paredes para separar você das lendas do cinema e da TV, oferecendo uma proximidade inigualável para cada fã que quer ver seus ídolos de perto. Imagine estar ali, cercado por uma legião de apaixonados, acompanhando entrevistas exclusivas com os protagonistas das séries e filmes que fazem parte da sua vida, a poucos metros de distância.E em 2023, o palco brilhou como nunca ao receber um lineup impressionante: Zendaya, com seu carisma contagiante; Chris Hemsworth, trazendo o poder dos deuses; Jason Momoa e toda sua presença lendária; Timothée Chalamet e o charme que conquistou Hollywood; Anya Taylor-Joy com sua intensidade magnética; além de ícones como Kurt Russell, Jodie Foster e o astro em ascensão Austin Butler. Não faltaram nomes lendários como Zack Snyder, o visionário; Bruce Dickinson, uma lenda do rock; e talentos como Charlie Hunnam, Florence Pugh e Joseph Morgan, que fizeram o palco tremer com a energia das multidões.Venha para o Palco Omelete e vivencie a emoção de estar cara a cara com esses ícones em uma experiência de pura adrenalina e celebração da cultura pop – uma oportunidade única de compartilhar o mesmo espaço e vibrar ao som de aplausos e risos com seus heróis."},
  { id: 3, imagem: Imagem3, titulo: "Palco Creators", subtitulo: "Um palco concebido com um único propósito: reunir os maiores e mais inovadores criadores de conteúdo ao vivo, em um crossover épico que transcende fronteiras. O Palco Creators é um verdadeiro multiverso digital, onde a loucura se encontra com a diversão, oferecendo atrações para toda a família. De programas de humor irresistíveis a shows de música que prometem ser épicos, cada momento no palco é uma experiência única. Com uma programação repleta de quadros divertidos, participações surpreendentes e performances musicais que vão fazer todos dançarem, o Palco Creators traz o melhor da internet para o mundo real. Prepare-se para uma verdadeira imersão no que há de mais criativo e inovador, com a energia e autenticidade dos criadores de conteúdo que você tanto admira. E, antes que sua atenção se perca em mais um vídeo de gatinho, já aviso: ainda teremos muitos anúncios incríveis pela frente, e o melhor está por vir!" },
];

const CarouselPalcos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stages.length) % stages.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      handleNext();
    } else if (info.offset.x > 100) {
      handlePrev();
    }
  };

  return (
    <div className="carousel-palcos-container">
      <h2 className='carousel-palcos-titulo'>Conheça os palcos da <span className='ccxp'>CCXP</span></h2>
      <div className="carousel-palcos-slider">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="carousel-palcos-item"
            style={{ cursor: 'grab' }}
            whileTap={{ cursor: 'grabbing' }}
          >
            <img src={stages[currentIndex].imagem} alt={stages[currentIndex].titulo} className="stage-image" />
            <div className='descricao-palco'>
            <h3>{stages[currentIndex].titulo}</h3>
            <p>{stages[currentIndex].subtitulo}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselPalcos;
