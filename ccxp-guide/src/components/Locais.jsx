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
  background-color: #6a0dad;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  margin: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #551a8b;
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
  }
`;

const LocalItem = styled.li`
  list-style: none;
  background-color: #4b0082;
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
    background-color: #551a8b;
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
    { id: 1, category: 'Restaurantes', name: 'D.O.M Restaurante', image: DomImage, link: 'https://www.google.com/maps/place/D.O.M./@-23.56632,-46.66745,15z/data=!4m2!3m1!1s0x0:0x269955670d659e58?sa=X&ved=1t:2428&ictx=111', descri: "REstaurante barato"},
    { id: 2, category: 'Hoteis', name: 'Wyndham Ibirapuera', image: WyndhamImage, link: 'https://www.google.com/travel/search?q=Wyndham%20sao%20paulo&g2lb=4814050%2C4874190%2C4893075%2C4899571%2C4899573%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72499704%2C72614662%2C72616120%2C72619927%2C72647020%2C72648289%2C72658035%2C72686036%2C72749231%2C72760080%2C72808078%2C72821155%2C72821159&hl=pt-BR&gl=br&ssta=1&ts=CAEaHBIaEhQKBwjoDxALGBkSBwjoDxALGBoYATICEAAqBwoFOgNCUkw&qs=CAEyE0Nnb0k1cTd2N3Q2UHBjUUpFQUU4CUIJEa39R6t6jNv8QgkRF9u9NkZ9Ry1CCRFMisIKRHcfRFo_Mj2qAToQATIfEAEiG1v9QFedAXyrGVqtRWnklgrmISX2vWfQ16rpCzIVEAIiEXd5bmRoYW0gc2FvIHBhdWxvahwKGg1-AxlEEhMIvbuzoefriQMV2GC4BB02Yy6p&ap=aAG6AQhvdmVydmlldw&ictx=111&ved=0CAAQ5JsGahcKEwjwtLmO5-uJAxUAAAAAHQAAAAAQEA' },
    { id: 3, category: 'Natureza', name: 'Elemento 3', image: 'url_da_imagem_3.jpg', link: 'https://exemplo-natureza.com' },
    { id: 4, category: 'Shoppings', name: 'Elemento 4', image: 'url_da_imagem_4.jpg', link: 'https://exemplo-shoppings.com' },
    { id: 5, category: 'Artes', name: 'Elemento 5', image: 'url_da_imagem_5.jpg', link: 'https://exemplo-artes.com' },
    { id: 6, category: 'Hospitais', name: 'Elemento 6', image: 'url_da_imagem_6.jpg', link: 'https://exemplo-esportes.com' },
    { id: 7, category: 'Shoppings', name: 'Elemento 7', image: 'url_da_imagem_7.jpg', link:'' },
    { id: 8, category: 'Artes', name: 'Elemento 8', image: 'url_da_imagem_8.jpg', link:'' },
    { id: 9, category: 'Hospitais', name: 'Elemento 9', image: 'url_da_imagem_9.jpg', link: ''},
    { id: 10, category: 'Restaurantes', name: 'Mocotó', image:  MocotoImage, link:'https://www.google.com/maps/place/Mocot%C3%B3+Bar+e+Restaurante/@-23.4910216,-46.5938413,14z/data=!4m6!3m5!1s0x94cef5f0d13f4bc9:0xcbf483956fa14303!8m2!3d-23.4867177!4d-46.5816933!16s%2Fg%2F1tg5d795?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D' },
    { id: 11, category: 'Hoteis', name: 'Transamerica Executive', image: TransamericaImage, link:'https://www.google.com/maps/place/Transamerica+Executive+Congonhas/@-23.6272064,-46.6647562,15z/data=!4m2!3m1!1s0x0:0x922fc7a38fa57ec7?sa=X&ved=1t:2428&ictx=111' },
    { id: 12, category: 'Natureza', name: 'Elemento 12', image: 'url_da_imagem_12.jpg', link: ''},
    { id: 13, category: 'Restaurantes', name: 'Milk & Mello', image: MilkImage, link: 'https://www.google.com/maps/place/Milk+%26+Mellow+Cidade+Jardim/@-23.5854445,-46.7707588,12z/data=!4m22!1m15!4m14!1m6!1m2!1s0x94ce5742bc832a29:0xa9323f13433864db!2sItaim+Bibi!2m2!1d-46.6780743!2d-23.5837476!1m6!1m2!1s0x94ce576aa683fe37:0xbabd98b43ba2a36d!2sAv.+Cidade+Jardim,+1085+-+Jardim+Europa,+S%C3%A3o+Paulo+-+SP,+01453-000!2m2!1d-46.688429!2d-23.5855101!3m5!1s0x94ce576aa683fe37:0xbabd98b43ba2a36d!8m2!3d-23.5854445!4d-46.6883613!16s%2Fg%2F1tkmnp88?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D'},
    { id: 14, category: 'Restaurantes', name: 'O Pasteleiro', image: PasteleiroImage, link: 'https://www.tripadvisor.com.br/Restaurant_Review-g303631-d5383002-Reviews-O_Pasteleiro-Sao_Paulo_State_of_Sao_Paulo.html'},
    { id: 15, category: 'Restaurantes', name: 'Sodie Doces', image: SodieImage, link: 'https://sodiedoces.com.br/'},
    { id: 16, category: 'Hoteis', name: 'Radisson Blu São Paulo', image: RadissonImage, link:'https://www.google.com/maps/place/Radisson+Blu+S%C3%A3o+Paulo/@-23.5826522,-46.6852585,15z/data=!4m2!3m1!1s0x0:0xf9ed44e93f34cde1?sa=X&ved=1t:2428&ictx=111' },
    { id: 17, category: 'Hoteis', name: 'Comfort Hotel', image: ComfortImage, link:'https://www.google.com/maps/place/Comfort+Hotel+S%C3%A3o+Caetano/@-23.6248223,-46.5812645,15z/data=!4m2!3m1!1s0x0:0xee990a6c63f94f04?sa=X&ved=1t:2428&ictx=111' },
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
