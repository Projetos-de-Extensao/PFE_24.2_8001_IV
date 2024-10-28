import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx'
import Home from './pages/Home.jsx';
import Atracoes from './pages/Atracoes.jsx';
import Localizacoes from './pages/Localizacoes.jsx';
import Meu_perfil_login from './pages/Meu_perfil_login.jsx';
import Meu_perfil_cadastro from './pages/Meu_perfil_cadastro.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atracoes" element={<Atracoes />} />
        <Route path="/localizacoes" element={<Localizacoes />} />
        <Route path="/meu_perfil_login" element={<Meu_perfil_login />} />
        <Route path="/meu_perfil_cadastro" element={<Meu_perfil_cadastro />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;