// Locais.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import DomImage from '../media/img/dom-restaurante.jpg';

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
  height: 70%;
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
    { id: 1, category: 'Restaurantes', name: 'D.O.M Restaurante', image: DomImage, link: 'https://www.google.com/maps/place/D.O.M./@-23.56632,-46.66745,15z/data=!4m2!3m1!1s0x0:0x269955670d659e58?sa=X&ved=1t:2428&ictx=111' },
    { id: 2, category: 'Hoteis', name: 'Elemento 2', image: 'url_da_imagem_2.jpg', link: 'https://exemplo-hotel.com' },
    { id: 3, category: 'Natureza', name: 'Elemento 3', image: 'url_da_imagem_3.jpg', link: 'https://exemplo-natureza.com' },
    { id: 4, category: 'Shoppings', name: 'Elemento 4', image: 'url_da_imagem_4.jpg', link: 'https://exemplo-shoppings.com' },
    { id: 5, category: 'Artes', name: 'Elemento 5', image: 'url_da_imagem_5.jpg', link: 'https://exemplo-artes.com' },
    { id: 6, category: 'Hospitais', name: 'Elemento 6', image: 'url_da_imagem_6.jpg', link: 'https://exemplo-esportes.com' },
    { id: 7, category: 'Shoppings', name: 'Elemento 7', image: 'url_da_imagem_7.jpg', link:'' },
    { id: 8, category: 'Artes', name: 'Elemento 8', image: 'url_da_imagem_8.jpg', link:'' },
    { id: 9, category: 'Hospitais', name: 'Elemento 9', image: 'url_da_imagem_9.jpg', link: ''},
    { id: 10, category: 'Restaurantes', name: 'Elemento 10', image: 'url_da_imagem_10.jpg', link:'' },
    { id: 11, category: 'Hoteis', name: 'Elemento 11', image: 'url_da_imagem_11.jpg', link:'' },
    { id: 12, category: 'Natureza', name: 'Elemento 12', image: 'url_da_imagem_12.jpg', link: ''},
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
    if (filteredCategory === '') return elements;
    if (filteredCategory === 'Favoritos') return elements.filter((element) => favoritos[element.id]);
    return elements.filter((element) => element.category === filteredCategory);
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
        <FiltroBotao onClick={() => handleFilterChange('Artes')}>Arte</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Hospitais')}>Hospitais</FiltroBotao>
        <FiltroBotao onClick={() => handleFilterChange('Favoritos')}>Favoritos</FiltroBotao>
      </FiltroContainer>

      <LocaisContainer>
        <ul>
          {filteredElements.map((element) => (
            <LocalItem key={element.id}>
              <LocalImageText>
                <LocalImage src={element.image} alt={element.name} />
                <LocalText>
                  <LocalName>{element.name}</LocalName>
                  <LocalCategory>{element.category}</LocalCategory>
                </LocalText>
              </LocalImageText>
              <div>
                <LocalLink href={element.link} target="_blank" rel="noopener noreferrer">
                  Saiba mais
                </LocalLink>
                <EstrelaFavorito
                  isFavorito={favoritos[element.id]}
                  onClick={() => handleFavoritoClick(element.id)}
                >
                  ⭐
                </EstrelaFavorito>
              </div>
            </LocalItem>
          ))}
        </ul>
      </LocaisContainer>
    </div>
  );
};

export default Locais;
