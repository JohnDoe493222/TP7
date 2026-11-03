import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="navbar-header">
      <div className="logo-box">
        <span>Logo</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/proyecto-blob">proyectoBlob</Link>
        <Link to="/acerca">Acerca de nosotros</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}