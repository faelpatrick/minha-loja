import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Topmenu.css";

const Topmenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <div className="navbar">
      <button className="toggle-button" onClick={toggleMenu}>
        ☰
      </button>

      <div className={menuOpen ? "menu open" : "menu closed"}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleMenu}>
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/messages" onClick={toggleMenu}>
              Mensagens
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              Sobre
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topmenu;