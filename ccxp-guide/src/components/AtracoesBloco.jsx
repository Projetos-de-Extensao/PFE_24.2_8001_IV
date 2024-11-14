import React from 'react';
import '../index.css';
import Image from '../media/img/ccxpcos.jpeg';
import img2 from '../media/img/concurso.jpg';
import img3 from '../media/img/concurso2.jpg';
function AtracoesBloco() {
  return (
    <div className="section-container section-right">
      <div className="section-content">
        <div className="text-content">
          <div className='link-wrapper'>
          <h1>Cosplays</h1>
          <p>
          A cultura do cosplay é um dos pilares fundamentais da CCXP, transformando o evento em um verdadeiro espetáculo de criatividade e expressão. No coração da Comic Con Experience, o cosplay vai além de uma simples fantasia: ele representa uma celebração da paixão dos fãs por personagens e universos que moldam suas vidas, oferecendo uma forma única de interação com o mundo da cultura pop.

Os cosplayers, com seu empenho e dedicação, dão vida a personagens icônicos de filmes, quadrinhos, animes, jogos e séries, tornando-se verdadeiros protagonistas do evento. A diversidade de estilos e referências transforma o ambiente da CCXP em um espaço de inclusão, onde cada pessoa, independente de sua origem ou idade, encontra uma maneira de se conectar com a cultura pop.
          
          </p>

          <div className='icon-svg'>
        
        </div>
        </div>
        </div>
        <div className="image-content-cosplay">
          <img src={Image} alt="Público na CCXP" />

        </div>
      </div>
    </div>
  );
}

export default AtracoesBloco;
