import React from "react";
import Topmenu from "./Topmenu";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        {/* LOGO */}
        <div className="topbar-container">
          <Link to="/">
            <img src="/assets/img/logo.png" alt="Minha Loja" className="logo" />
          </Link>
          {/* NAV TOP MENU */}
          <nav>
            <Topmenu />
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
