import React from 'react';
import '../assets/styles/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <div className='logo-1'>Desatando Nós</div>
        <div>- Psicologia</div>
      </div>
      <nav className='nav'>
        <ul>
            <li>Home</li>
            <li>Artigos</li>
            <li>Psicólogas</li>
            <li>Serviços</li>
            <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
