import React from 'react';

import '../assets/styles/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <div className='logo-1'>Desatando Nós</div>
        <div>Psicologia</div>
      </div>
      <nav className='nav'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/article">Artigos</Link></li>
            <li><Link to="/service">Serviços</Link></li>
            <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
