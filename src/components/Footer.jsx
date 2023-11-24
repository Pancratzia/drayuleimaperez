import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__logo-container">
          <Logo bloque="footer" />
            <br />
          <q className="footer__cita">
            Enalteciendo cada étapa de la mujer con la mejor atención y
            experiencia
          </q>
        </div>

        <div className="footer__sociales">

        </div>
      </div>
    </footer>
  );
};

export default Footer;
