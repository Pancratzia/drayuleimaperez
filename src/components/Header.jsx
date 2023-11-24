import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [abierto, setAbierto] = useState(false);

  const manejarClick = () => {
    setAbierto(!abierto);
  };

  return (
    <header className="header">
      <div className="header__info">
        <div className="header__info--container">
          <a className="header__info--a" href="#">
            <i className="fa-solid fa-phone"></i>
            (+58) 416-654-2059
          </a>

          <a className="header__info--a" href="#">
            <i className="fa-solid fa-location-dot"></i>
            Edif. Cavendes, consultorio 1-6
          </a>
        </div>
      </div>

      <div className="header__grid">
        <div className="barra">
          <Logo bloque="barra" />
          <div
            className={
              abierto
                ? "barra__navegacion abierto"
                : "barra__navegacion cerrado"
            }
            onClick={manejarClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={abierto ? "nav abierto" : "nav cerrado"}>
          <a href="#" className="nav__enlace">
            Home
          </a>
          <a href="#" className="nav__enlace">
            Sobre Mí
          </a>
          <a href="#" className="nav__enlace">
            Servicios
          </a>
          <a href="#" className="nav__enlace">
            Trabajos
          </a>
          <a href="#" className="nav__enlace">
            Horario
          </a>
          <a href="#" className="nav__enlace">
            Ubicación
          </a>
        </nav>

        <nav className="nav--desktop">
          <a href="#" className="nav--desktop__enlace">
            Home
          </a>
          <a href="#" className="nav--desktop__enlace">
            Sobre Mí
          </a>
          <a href="#" className="nav--desktop__enlace">
            Servicios
          </a>
          <a href="#" className="nav--desktop__enlace">
            Trabajos
          </a>
          <a href="#" className="nav--desktop__enlace">
            Horario
          </a>
          <a href="#" className="nav--desktop__enlace">
            Ubicación
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
