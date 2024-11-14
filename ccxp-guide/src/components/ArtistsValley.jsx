import React from 'react';
import ArtistsValleyFoto from '../media/img/artists-valley-foto.png';
import Group63 from '../media/img/banner-artists.png';
import '../index.css';

const ArtistsValley = () => {
  return (
    <section className="artists-valley-container">
      <div className="artists-valley-header">
        <img src={Group63} alt="Artists Valley Logo" className="artists-valley-logo" />
      </div>
      <p className="artists-valley-description">
        O Artists Valley na CCXP 24 é uma área dedicada a artistas independentes, onde eles podem expor e vender suas obras,
        interagir com o público e participar de painéis. É uma oportunidade para novos talentos e profissionais estabelecidos se
        conectarem com fãs e outros criadores. O espaço valoriza a diversidade criativa, abrangendo quadrinhos, ilustrações,
        arte digital e mais, promovendo a cultura pop e o empreendedorismo artístico. A CCXP, como um todo, é um dos maiores
        eventos de cultura pop do mundo, reunindo fãs e artistas de diversas áreas.
      </p>
      <div className="artists-valley-content">
        <img src={ArtistsValleyFoto} alt="Artists Valley Foto" className="artists-valley-image" />
        <button
  className="botao"
  onClick={() => window.open("https://www.ccxp.com.br/artists-valley-manual-inscricoes/", "_blank")}
>
  Acesse o manual
</button>

      </div>
    </section>
  );
};

export default ArtistsValley;
