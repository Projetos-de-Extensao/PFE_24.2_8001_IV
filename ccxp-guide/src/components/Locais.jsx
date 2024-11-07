import React, { useState } from 'react';

const Locais = () => {
  const elements = [
    { id: 1, category: 'Restaurantes', name: 'Elemento 1' },
    { id: 2, category: 'Hoteis', name: 'Elemento 2' },
    { id: 3, category: 'Natureza', name: 'Elemento 3' },
    { id: 4, category: 'Shoppings', name: 'Elemento 4' },
    { id: 5, category: 'Artes', name: 'Elemento 5' },
    { id: 6, category: 'Esportes', name: 'Elemento 6' },
    // Adicione mais elementos conforme necessário
  ];

  const [filteredCategory, setFilteredCategory] = useState('');

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  const filteredElements = elements.filter(
    (element) => !filteredCategory || element.category === filteredCategory
  );

  const categories = ['Restaurantes', 'Hoteis', 'Natureza', 'Shoppings', 'Artes', 'Esportes'];

  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => handleFilterChange(category)}>
          Categoria {category}
        </button>
      ))}
      <button onClick={() => handleFilterChange('')}>Todas</button>

      <ul>
        {filteredElements.map((element) => (
          <li key={element.id}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Locais;

