import { useState } from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [abierto, setAbierto] = useState(false);

  const manejarClick = () => {
    setAbierto(!abierto);
  };

  const smoothScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        block: "center",
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="header">
      <div className="header__info">
        <div className="header__info--container">
          <a className="header__info--a" href="https://wa.me/584166542059?text=%C2%A1Hola,%20Doctora%20Yuleima!%20Estoy%20interesada%20en%20acudir%20a%20su%20consulta" rel="noreferrer" target="_blank">
            <i className="fa-solid fa-phone"></i>
            (+58) 416-654-2059
          </a>

          <a className="header__info--a" href="https://maps.app.goo.gl/ZvhhZbCz4RT61ymW7" rel="noreferrer" target="_blank">
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
          <a href="#home" className="nav__enlace" onClick={e => smoothScrollTo(e, "#home")}>
            Home
          </a>
          <a href="#sobremi" onClick={e => smoothScrollTo(e, "#sobremi")} className="nav__enlace">
            Sobre Mí
          </a>
          <a href="#servicios"  onClick={e => smoothScrollTo(e, "#servicios")} className="nav__enlace">
            Servicios
          </a>
          <a href="#galeria" onClick={e => smoothScrollTo(e, "#galeria")} className="nav__enlace">
            Galería
          </a>
          <a href="#horario" onClick={e => smoothScrollTo(e, "#horario")} className="nav__enlace">
            Horario
          </a>
          <a href="#ubicacion" onClick={e => smoothScrollTo(e, "#ubicacion")} className="nav__enlace">
            Ubicación
          </a>
        </nav>

        <nav className="nav--desktop">
          <a href="#home" onClick={e => smoothScrollTo(e, "#home")} className="nav--desktop__enlace">
            Home
          </a>
          <a href="#sobremi" onClick={e => smoothScrollTo(e, "#sobremi")} className="nav--desktop__enlace">
            Sobre Mí
          </a>
          <a href="#servicios" onClick={e => smoothScrollTo(e, "#servicios")} className="nav--desktop__enlace">
            Servicios
          </a>
          <a href="#galeria" onClick={e => smoothScrollTo(e, "#galeria")} className="nav--desktop__enlace">
            Galería
          </a>
          <a href="#horario"  onClick={e => smoothScrollTo(e, "#horario")} className="nav--desktop__enlace">
            Horario
          </a>
          <a href="#ubicacion" onClick={e => smoothScrollTo(e, "#ubicacion")} className="nav--desktop__enlace">
            Ubicación
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
