import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/atracoes"
            className={location.pathname === "/atracoes" ? "active" : "nav-link"}
          >
            Atrações
          </Link>
        </li>
        <li>
          <Link
            to="/localizacoes"
            className={location.pathname === "/localizacoes" ? "active" : "nav-link"}
          >
            Localizações
          </Link>
        </li>
        <li>
          <Link
            to="/meu_perfil_login"
            className={location.pathname === "/meu_perfil_login" ? "active" : "nav-link"}
          >
            Meu Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
