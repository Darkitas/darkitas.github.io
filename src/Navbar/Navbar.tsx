import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "#home", label: "Inicio" },
  { href: "#sobremi", label: "Sobre mí" },
  { href: "#tecnologias", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <a
          className="brand"
          href="#home"
          aria-label="Ir al inicio"
          onClick={closeMenu}
        >
          <span className="brand-mark">D</span>
          <span>Darkitas</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? "open" : ""}`}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="nav-cta"
          href="/cv/CV_SantiagoTuberquia.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          CV <FiArrowUpRight aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
