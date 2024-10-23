import Header from "../components/Header";
import Background from "../components/Background";
import { Link } from 'react-router-dom';


function Meu_perfil_login() {
    return (
    <div>  
      <Background />
      <Header />
      <h1 className="frase-principal">Essa é a página de login</h1>
      <button><Link to = "/meu_perfil_cadastro">Não possui cadastro?</Link></button>
    </div>

    );
  }

  export default Meu_perfil_login;