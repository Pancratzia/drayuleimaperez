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
          <h3 className="footer__titulo--h3">Contacto</h3>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/drayuleimaperez"
              rel="noreferrer"
              target="_blank"
              className="footer__social--a"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://wa.me/584166542059?text=%C2%A1Hola,%20Doctora%20Yuleima!%20Estoy%20interesada%20en%20acudir%20a%20su%20consulta%20%F0%9F%98%8A"
              rel="noreferrer"
              target="_blank"
              className="footer__social--a"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <a
              href="mailto:drayuleimaperezgin@hotmail.com"
              rel="noreferrer"
              target="_blank"
              className="footer__social--a"
            >
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer__info">
          <h3 className="footer__titulo--h3">Información</h3>
          <p className="footer__info--p">
            Carrera 18 entre Calles 23 y 24. Edificio Cavendes. Primer Piso,
            Consultorio 1-6
          </p>
          <p className="footer__info--p">Barquisimeto - Venezuela</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
