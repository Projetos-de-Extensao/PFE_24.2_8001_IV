// Locais.jsx
import React, { useState } from 'react';
import styled from 'styled-components';




// Estilos para os botões de filtro
const FiltroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
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
    font-size: 16px;
    padding: 10px 20px;
  }
`;

// Estilos para o container de locais
const LocaisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

// Estilos para os itens de locais
const LocalItem = styled.li`
  list-style: none;
  background-color: #4b0082;
  color: white;
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  width: 200em;
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
    font-size: 18px;
    width: 90%;
  }
`;

// Estilos para a imagem e o texto à esquerda
const LocalImageText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
`;

const LocalImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-right: 15px;
`;

const LocalText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LocalName = styled.h3`
  font-size: 22px;
  margin: 0;
  font-weight: bold;
`;

const LocalCategory = styled.p`
  font-size: 16px;
  color: #ccc;
`;

// Estilos para o botão de favorito
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
`;

const Locais = () => {
  const elements = [
    { id: 1, category: 'Restaurantes', name: 'D.O.M Restaurante', image:'/dom-restaurante.jpg'},
    { id: 2, category: 'Hoteis', name: 'Elemento 2', image: 'url_da_imagem_2.jpg' },
    { id: 3, category: 'Natureza', name: 'Elemento 3', image: 'url_da_imagem_3.jpg' },
    { id: 4, category: 'Shoppings', name: 'Elemento 4', image: 'url_da_imagem_4.jpg' },
    { id: 5, category: 'Artes', name: 'Elemento 5', image: 'url_da_imagem_5.jpg' },
    { id: 6, category: 'Esportes', name: 'Elemento 6', image: 'url_da_imagem_6.jpg' },
    { id: 7, category: 'Shoppings', name: 'Elemento 7', image: 'url_da_imagem_7.jpg' },
    { id: 8, category: 'Artes', name: 'Elemento 8', image: 'url_da_imagem_8.jpg' },
    { id: 9, category: 'Esportes', name: 'Elemento 9', image: 'url_da_imagem_9.jpg' },
    { id: 10, category: 'Restaurantes', name: 'Elemento 10', image: 'url_da_imagem_10.jpg' },
    { id: 11, category: 'Hoteis', name: 'Elemento 11', image: 'url_da_imagem_11.jpg' },
    { id: 12, category: 'Natureza', name: 'Elemento 12', image: 'url_da_imagem_12.jpg' },
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

  const getRandomLocalFromCategory = (category) => {
    return elements.filter((element) => element.category === category);
  };

  const getFilteredElements = () => {
    if (filteredCategory === '') {
      // Para o filtro "Todos", mostra 1 local aleatório de cada categoria
      const uniqueCategories = [...new Set(elements.map((element) => element.category))];
      return uniqueCategories.map((category) => {
        const randomElement = getRandomLocalFromCategory(category)[0];
        return randomElement;
      });
    } else {
      // Para outras categorias, mostra 4 locais da categoria (3 mais um adicional)
      return getRandomLocalFromCategory(filteredCategory).slice(0, 4);
    }
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
        <FiltroBotao onClick={() => handleFilterChange('Esportes')}>Esportes</FiltroBotao>
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
              <EstrelaFavorito
                isFavorito={favoritos[element.id]}
                onClick={() => handleFavoritoClick(element.id)}
              >
                ⭐
              </EstrelaFavorito>
            </LocalItem>
          ))}
        </ul>
      </LocaisContainer>
    </div>
  );
};

export default Locais;
