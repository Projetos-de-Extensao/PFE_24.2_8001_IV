// LocalItem.jsx
import React from 'react';
import styled from 'styled-components';

// Estilos para o item de local
const ItemContainer = styled.li`
  list-style: none;
  background-color: #4b0082;
  color: white;
  padding: 20px;
  margin: 15px 0;
  border-radius: 10px;
  width: 85%;
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

const LocalImageText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
`;

const LocalImage = styled.img`
  width: 80px;
  height: 80px;
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

const LocalItem = ({ element, isFavorito, onFavoritoClick }) => {
  return (
    <ItemContainer>
      <LocalImageText>
        <LocalImage src={element.image} alt={element.name} />
        <LocalText>
          <LocalName>{element.name}</LocalName>
          <LocalCategory>{element.category}</LocalCategory>
        </LocalText>
      </LocalImageText>
      <EstrelaFavorito isFavorito={isFavorito} onClick={() => onFavoritoClick(element.id)}>
        ⭐
      </EstrelaFavorito>
    </ItemContainer>
  );
};

export default LocalItem;
