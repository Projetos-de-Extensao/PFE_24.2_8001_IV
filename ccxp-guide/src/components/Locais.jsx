import React, { useState } from 'react';
import styled from 'styled-components';
import DomImage from '../media/img/dom-restaurante.jpg';
import MocotoImage from '../media/img/mocoto.png';
import MilkImage from '../media/img/MilkMellow.jpg';
import PasteleiroImage from '../media/img/o-pasteleiro.jpg';
import SodieImage from '../media/img/sodie-doces.jpg';
import RadissonImage from '../media/img/radisson-blue.png';
import WyndhamImage from '../media/img/wyndham.jpg';
import TransamericaImage from '../media/img/transamerica-executive.jpg';
import ComfortImage from '../media/img/comfort.jpg';
import IbirapueraImage from '../media/img/ibirapuera.png';
import JkImage from '../media/img/jk-iguatemi.png';
import MaspImage from '../media/img/MASP.png';
import SirioImage from '../media/img/sirio-libanes.png';
import IguatemiImage from '../media/img/Iguatemi.png';
import PinacotecaImage from '../media/img/pinacoteca.png';
import EisteinImage from '../media/img/einstein.jpg';
import VilaImage from '../media/img/vila-lobos.png';
import BotanicoImage from '../media/img/jd-botanico.jpg';
import ZooImage from '../media/img/zoo.jpg';
import AnaliaImage from '../media/img/analia.png';
import MarketImage from '../media/img/sp-market.png';
import AfroImage from '../media/img/museu-afro.jpg';
import ItauImage from '../media/img/itau.jpg';
import MunicipalImage from '../media/img/municipal.png' ;
import CriancaImage from '../media/img/crianca.jpg' ;


const FiltroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    align-items: center;
  }
`;

const FiltroBotao = styled.button`
  background-color: #351EF5;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  margin: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #66B1F2;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const LocaisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 1000px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px;
    max-width: 300px
  }
`;

const LocalItem = styled.li`
  list-style: none;
  background-color: #351EF5;
  color: white;
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;

  &:hover {
    background-color: #6680F2;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
    flex-direction: column;
    text-align: center;
  }
`;

const LocalImageText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const LocalImage = styled.img`
  width: 50%;
  height: 20%;
  border-radius: 10px;
  margin-right: 15px;

  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const LocalText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const LocalName = styled.h3`
  font-size: 22px;
  margin: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const LocalCategory = styled.p`
  font-size: 16px;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const EstrelaFavorito = styled.button`
  background-color: transparent;
  border: none;
  font-size: 28px;
  color: ${({ isFavorito }) => (isFavorito ? 'gold' : 'white')};
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: gold;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const LocalLink = styled.a`
  display: block;
  color: #ffd700;
  font-size: 16px;
  text-decoration: underline;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #fff700;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Locais = () => {
  const elements = [
    { id: 1, category: 'Restaurantes', name: 'D.O.M Restaurante', image: DomImage, link: 'https://www.domrestaurante.com.br/', descri: "Rua Barão de Capanema, 549"},
    { id: 2, category: 'Hoteis', name: 'Wyndham Ibirapuera', image: WyndhamImage, link: 'https://www.wyndhamhotels.com/pt-br/wyndham/sao-paulo-brazil/wyndham-sao-paulo-ibirapuera-convention-plaza-hotel/overview', descri:"Avenida Ibirapuera, 2927"},
    { id: 3, category: 'Natureza', name: 'Parque Ibirapuera', image: IbirapueraImage, link: 'https://www.parquedoibirapuera.org/', descri:"Av. Pedro Álvares Cabral - Vila Mariana"},
    { id: 4, category: 'Shoppings', name: 'JK Iguatemi', image: JkImage, link: 'https://iguatemi.com.br/jkiguatemi/', descri:"Av. Pres. Juscelino Kubitschek, 2041" },
    { id: 5, category: 'Artes', name: 'MASP', image: MaspImage, link: 'https://masp.org.br/' },
    { id: 6, category: 'Hospitais', name: 'Hospital Sírio Libanes', image: SirioImage, link: 'https://hospitalsiriolibanes.org.br/', descri:"R. Joaquim Floriano, 533" },
    { id: 7, category: 'Shoppings', name: 'Iguatemi', image: IguatemiImage, link:'https://iguatemi.com.br/saopaulo/', descri:"Avenida Brigadeiro Faria Lima, 2232"},
    { id: 8, category: 'Artes', name: 'Pinacoteca', image: PinacotecaImage, link:'https://pinacoteca.org.br/', descri:"Praça da Luz, 2"},
    { id: 9, category: 'Hospitais', name: 'Israelita Albert Einstein', image: EisteinImage, link: 'https://www.einstein.br/Pages/Home.aspx', descri:"Av. Albert Einstein, 627"},
  { id: 10, category: 'Restaurantes', name: 'Mocotó', image:  MocotoImage, link:'https://mocoto.com.br/', descri:"Av. Nossa Sra. do Loreto, 1100"},
    { id: 11, category: 'Hoteis', name: 'Transamerica Executive', image: TransamericaImage, link:'https://mocoto.com.br/', descri: "R. Vieira de Morais, 1960" },
    { id: 12, category: 'Natureza', name: 'Parque Vila Lobos', image: VilaImage, link: 'https://www.parquevillalobos.net/', descri:"Av. Prof. Fonseca Rodrigues, 2001"},
    { id: 13, category: 'Restaurantes', name: 'Milk & Mellow', image: MilkImage, link: 'https://milkmellow.com.br/', descri:"Av. Pres. Juscelino Kubitschek, 101"},
    { id: 14, category: 'Restaurantes', name: 'O Pasteleiro', image: PasteleiroImage, link: 'https://www.tripadvisor.com.br/Restaurant_Review-g303631-d5383002-Reviews-O_Pasteleiro-Sao_Paulo_State_of_Sao_Paulo.html', descri:"Rua dos Comerciarios, 459"},
    { id: 16, category: 'Hoteis', name: 'Radisson Blu São Paulo', image: RadissonImage, link:'https://www.booking.com/searchresults.pt-br.html?aid=356980&label=gog235jc-1DCAsoIEIWcmFkaXNzb24tYmx1LXNhby1wYXVsb0gtWANoIIgBAZgBLbgBF8gBDNgBA-gBAfgBAogCAagCA7gCkuD8uQbAAgHSAiRjNmRiMzU5Mi1hZjk1LTQ3Y2EtYWQ5MS1kY2Y0MTA5NTkzNjLYAgTgAgE&highlighted_hotels=265131&redirected=1&city=-671824&hlrd=user_sh&source=hotel&expand_sb=1&keep_landing=1&sid=61f2d6ebd68370c810bc328d031af4ec', descri:"Av. Cidade Jardim, 625"},
    { id: 17, category: 'Hoteis', name: 'Comfort Hotel', image: ComfortImage, link:'https://www.booking.com/searchresults.pt-br.html?aid=1726433&label=comfort-sao-caetano-y_M823oIpsjK4YWWY%2A%2ACzAS466250329806%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-302750598627%3Alp9211962%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbC4OlOULAnvcrFmvh1xnqM&gclid=Cj0KCQiA0fu5BhDQARIsAMXUBOJLSg2J6fwsBWXsXi_l4ulxIElLap4KYR_6trm64JLcMnhQzBQE67UaAjPgEALw_wcB&highlighted_hotels=1942048&redirected=1&city=-670108&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=61f2d6ebd68370c810bc328d031af4ec', descri:"Torre 2A, Alameda Terracota, 250" },
    { id: 18, category: 'Natureza', name: 'Jardim Botânico', image: BotanicoImage, link: 'https://www.saopaulo.sp.gov.br/conhecasp/parques-e-reservas-naturais/jardim-botanico/', descri:"Av. Miguel Estefano, 3031"},
    { id: 19, category: 'Natureza', name: 'Zoológico de São Paulo', image: ZooImage, link: 'https://ingressos.zoologico.com.br/?utm_source=google&utm_content=cid|21288890589|gid|165438531594|kwid|kwd-309651720671&gad_source=1&gclid=Cj0KCQiA0fu5BhDQARIsAMXUBOKNEG7UQJAFlw7BVt5D96XIwzE-h8EGJKb7mTeq1eLTRl1KtUJ933gaAtdEEALw_wcB', descri:"Av. Miguel Estefano, 4241" },
    { id: 20, category: 'Shoppings', name: 'Shopping Anália Franco', image: AnaliaImage, link: 'https://www.shoppinganaliafranco.com.br/?gad_source=1&gclid=Cj0KCQiA0fu5BhDQARIsAMXUBOI7UauAkq-D9ZoLfzASOj9MVmciS7-bSHepSN-alwdag5EBLnel4fgaAg4cEALw_wcB', descri:"Av. Reg. Feijó, 1739" },
    { id: 21, category: 'Shoppings', name: 'SP Market', image: MarketImage, link: 'https://www.shoppingspmarket.com.br/', descri: "Av. das Nações Unidas, 22540"},
    { id: 22, category: 'Artes', name: 'Museu Afro', image: AfroImage, link: 'http://www.museuafrobrasil.org.br/visite/planeje-sua-visita/entrada-e-horario-de-funcionamento', descri:"Portão 10, Av. Pedro Álvares Cabral, s/n" },
    { id: 23, category: 'Artes', name: 'Itaú Cultural', image: ItauImage, link: 'https://www.itaucultural.org.br/', descri:"Av. Paulista, 149" },
    { id: 25, category: 'Hospitais', name: 'Hospital Municipal', image: MunicipalImage, link: 'https://www.einstein.br/estrutura/unidades/hospital-municipal-vila-santa-catarina', descri:"Av. Santa Catarina, 2785" },
    { id: 26, category: 'Hospitais', name: 'Hospital da Criança', image: CriancaImage, link: 'https://www.rededorsaoluiz.com.br/', descri:"Rua das Perobas, 295"},
    
    
  ];

  const [filteredCategory, setFilteredCategory] = useState('');
  const [favoritos, setFavoritos] = useState({});

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const handleFavoritoClick = (id) => {
    setFavoritos((prevFavoritos) => ({
      ...prevFavoritos,
      [id]: !prevFavoritos[id],
    }));
  };

  const getFilteredElements = () => {
    if (filteredCategory === '') {
      // Para a categoria "Todos", exibe 1 elemento aleatório de cada categoria
      const categories = [...new Set(elements.map((element) => element.category))];
      const uniqueElements = categories.map((category) => {
        const categoryElements = elements.filter((element) => element.category === category);
        const randomElement = categoryElements[Math.floor(Math.random() * categoryElements.length)]; // Escolhe um elemento aleatório
        return randomElement;
      });
      return uniqueElements;
    }
  
    if (filteredCategory === 'Favoritos') {
      return elements.filter((element) => favoritos[element.id]);
    }
  
    // Para outras categorias, retorna apenas 4 elementos
    return elements.filter((element) => element.category === filteredCategory).slice(0, 4);
  };
  
  const filteredElements = getFilteredElements();
  

  return (
    <div>
      <FiltroContainer>
        <FiltroBotao onClick={() => handleFilterChange('')}>Todos</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Restaurantes')}>Restaurantes</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Hoteis')}>Hotéis</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Natureza')}>Natureza</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Shoppings')}>Shoppings</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Artes')}>Artes</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Hospitais')}>Hospitais</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Favoritos')}>Favoritos</FiltroBotao>
      </FiltroContainer>

      <LocaisContainer>
        {filteredElements.map((local) => (
          <LocalItem key={local.id}>
            <LocalImageText>
              <LocalImage src={local.image} alt={local.name} />
              <LocalText>
                <LocalName>{local.name}</LocalName>
                <LocalCategory>{local.descri}</LocalCategory>
                <LocalLink href={local.link}>Mais informações</LocalLink>
              </LocalText>
            </LocalImageText>
            <EstrelaFavorito
              isFavorito={favoritos[local.id]}
              onClick={() => handleFavoritoClick(local.id)}
            >
              ★
            </EstrelaFavorito>
          </LocalItem>
        ))}
      </LocaisContainer>
    </div>
  );
};

export default Locais;
