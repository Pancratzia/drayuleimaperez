import { useState } from "react";

const Header = () => {
  const [abierto, setAbierto] = useState(false);

  const manejarClick = () => {
    setAbierto(!abierto);
  };



  return (
    <header className="header">
      <div className="header__grid">

        <div className="barra">
          <a href="/" className="barra__logo">
            <img src="/img/logo.png" alt="logo" />
            <h1 className="barra__titulo">Dra. Yuleima Pérez</h1>
          </a>

          <div className={abierto ? "barra__navegacion abierto" : "barra__navegacion cerrado"} onClick={manejarClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={abierto ? "nav abierto" : "nav cerrado"}>
          <a href="#" className="nav__enlace">Home</a>
          <a href="#" className="nav__enlace">Sobre Mí</a>
          <a href="#" className="nav__enlace">Servicios</a>
          <a href="#" className="nav__enlace">Trabajos</a>
          <a href="#" className="nav__enlace">Mi ubicación</a>
          <a href="#" className="nav__enlace">Horario</a>
        </nav>

        <nav className="nav--desktop">
          <a href="#" className="nav--desktop__enlace">Home</a>
          <a href="#" className="nav--desktop__enlace">Sobre Mí</a>
          <a href="#" className="nav--desktop__enlace">Servicios</a>
          <a href="#" className="nav--desktop__enlace">Trabajos</a>
          <a href="#" className="nav--desktop__enlace">Ubicación</a>
          <a href="#" className="nav--desktop__enlace">Horario</a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
