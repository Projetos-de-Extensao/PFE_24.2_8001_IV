import {React, useState, useEffect, useRef} from 'react';
import '../index.css';
import {motion} from 'framer-motion';
import Image1 from '../media/img/carrossel-01.png';
import Image2 from '../media/img/carrossel-02.png';
import Image3 from '../media/img/carrossel-03.png';
import Image4 from '../media/img/carrossel-04.png';
import Icon1 from '../media/svg/pokemon-trainer.svg';
import Icon2 from '../media/svg/naruto-119_svgrepo.com.svg';
import Icon3 from '../media/svg/avatar-bad-breaking.svg';


const images = [Image1, Image2, Image3, Image4]

function CarrosselCcxp() {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <div className='carousel-ccxp-container'>

      <motion.div  ref= {carousel}className='carousel-ccxp' whileTap={{cursor: "grabbing"}}>
        <motion.div className='inner-ccxp'
         drag="x"
         dragConstraints = {{ right:0, left: -width}}>

          {images.map(image => (
            <motion.div className='image-ccxp' key ={image}>
              <img src={image} alt="Texto alt"/>
            </motion.div>

          ))}


        </motion.div>
      </motion.div>
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
