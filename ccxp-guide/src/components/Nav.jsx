import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();

  // Verificar se estamos na página de login
  const isLoginPage = location.pathname === "/login" || location.pathname === "/meu_perfil_login";

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : "nav-link"}
            style={isLoginPage ? { color: "#5B28E5" } : {}}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/atracoes"
            className={location.pathname === "/atracoes" ? "active" : "nav-link"}
            style={isLoginPage ? { color: "#5B28E5" } : {}}
          >
            Atrações
          </Link>
        </li>
        <li>
          <Link
            to="/localizacoes"
            className={location.pathname === "/localizacoes" ? "active" : "nav-link"}
            style={isLoginPage ? { color: "#5B28E5" } : {}}
          >
            Localizações
          </Link>
        </li>
        <li>
          <Link
            to="/meu_perfil_login"
            className={location.pathname === "/meu_perfil_login" ? "active" : "nav-link"}
            style={isLoginPage ? { color: "#5B28E5" } : {}}
          >
            Meu Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
