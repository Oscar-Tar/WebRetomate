'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../globals.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false); // Cierra menú al hacer clic

  return (
    <header className="header">
      <div className="logo">
        <Link href="/" onClick={closeMenu}>Mi Sitio</Link>
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <Link href="/inicio" onClick={closeMenu}>Inicio</Link>
        <Link href="/acerca" onClick={closeMenu}>Acerca</Link>
        <Link href="/servicios" onClick={closeMenu}>Servicios</Link>
        <Link href="/contacto" onClick={closeMenu}>Contacto</Link>
        <Link href="/login" onClick={closeMenu}>Login</Link>
      </nav>

      <div
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
