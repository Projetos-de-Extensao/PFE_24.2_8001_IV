import React, { useEffect } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import { Link } from 'react-router-dom';



function Meu_perfil_cadastro() {
  useEffect(() => {
    // Adicionar classe "no-background" ao body quando o componente for montado
    document.body.classList.add('no-background');

    // Remover a classe "no-background" quando o componente for desmontado
    return () => {
      document.body.classList.remove('no-background');
    };
  }, [])
  return (
    <div>
      <Background />
      <Header />
      <h1 className="frase-principal">Essa é a página de cadastro</h1>
    </div> 
  );
}

export default Meu_perfil_cadastro;
