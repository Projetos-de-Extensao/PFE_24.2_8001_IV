import React from 'react';
import '../index.css';
import Nav from './Nav.jsx';
import logo from '../media/img/CCXP_2014_alt 1.png'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="CCXP-Logo" /> 
      </div>
      <Nav />
    </header>
  );
}

export default Header;
