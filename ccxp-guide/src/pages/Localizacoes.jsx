import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from 'styled-components';
import Locais from "../components/Locais";
import Map from "../components/Map";

const BotaoEstilizado = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

function Localizacoes() {
    return (
    <div> 
    <Header />
    <h1 className="frase-principal">O melhor guia para se localizar ao redor do evento.</h1>
    <div>
      <Locais />
    </div>
    <Map />
    <Footer />
    </div>  
);
  }

  export default Localizacoes;