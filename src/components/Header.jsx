import { useState } from "react";

const Header = () => {
  const [abierto, setAbierto] = useState(false);

  const manejarClick = () => {
    setAbierto(!abierto);
  };



  return (
    <header className="header">
      <div className="barra">
        <a href="/" className="barra__imagen">
          <img src="/img/logo.png" alt="logo" />
        </a>

        <div className={abierto ? "barra__navegacion abierto" : "barra__navegacion cerrado"} onClick={manejarClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav className={abierto ? "nav abierto" : "nav cerrado"}>
        <a href="#" className="nav__enlace">Home</a>
        <a href="#" className="nav__enlace">Sobre mi</a>
        <a href="#" className="nav__enlace">Mis servicios</a>
        <a href="#" className="nav__enlace">Mis trabajos</a>
        <a href="#" className="nav__enlace">Mi ubicación</a>
        <a href="#" className="nav__enlace">Horario</a>
      </nav>
    </header>
  );
};

export default Header;
