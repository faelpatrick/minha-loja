import React from "react";
import { Link } from "react-router-dom";
import "./Topmenu.css";

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.menuListRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // Método para lidar com o clique fora do menu
  handleClickOutside = (event) => {
    if (this.menuListRef && !this.menuListRef.current.contains(event.target)) {
      this.setState({ menuOpen: false });
    }
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  // Método para fechar o menu quando um link é clicado
  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <div className="topbar">
        <button onClick={this.toggleMenu}>☰</button>
        <div ref={this.menuListRef}> {/* Ref aplicada aqui */}
          <ul style={{ left: menuOpen ? "0" : "-100%" }}>
            <li onClick={this.closeMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={this.closeMenu}>
              <Link to="/products">Produtos</Link>
            </li>
            <li onClick={this.closeMenu}>
              <Link to="/contact">Contacto</Link>
            </li>
            <li onClick={this.closeMenu}>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TopMenu;
