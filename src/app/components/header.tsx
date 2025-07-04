'use client';

import React, { useState } from 'react';
import '../globals.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Mi Sitio</div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#">Inicio</a>
        <a href="#">Acerca</a>
        <a href="#">Servicios</a>
        <a href="#">Contacto</a>
      </nav>
      <div
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
