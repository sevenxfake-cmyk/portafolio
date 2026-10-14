import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // PASO 2: useState abre/cierra el menú móvil.
  const [isOpen, setIsOpen] = useState(false);
  const cerrarMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <a className="navbar-logo" href="#inicio" onClick={cerrarMenu}>
        <span className="text-cyan">Darient</span> Chanta
      </a>

      <div id="navbar-menu" className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#sobre-mi" onClick={cerrarMenu}>Perfil</a>
        <a href="#tech-stack" onClick={cerrarMenu}>Habilidades</a>
        <a href="#certificados" onClick={cerrarMenu}>Certificados</a>
        <a href="#proyectos" onClick={cerrarMenu}>Proyectos</a>
        <a href="#servicios" onClick={cerrarMenu}>Servicios</a>
        <a href="#contacto" onClick={cerrarMenu}>Contacto</a>
      </div>

      <button
        className="navbar-toggle"
        type="button"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
};

export default Navbar;
