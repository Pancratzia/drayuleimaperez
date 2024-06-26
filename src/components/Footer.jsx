import Logo from "./Logo";
import { FaInstagram, FaWhatsapp, FaRegEnvelope, FaFacebook, FaLocationDot, FaEarthAmericas, FaClock } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__grid">
        <div className="footer__logo-container">
          <Logo bloque="footer" />
          <br />
          <q className="footer__cita">
            Enalteciendo cada etapa de la mujer con la mejor atención y
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
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/drayuleimaperez/"
              rel="noreferrer"
              target="_blank"
              className="footer__social--a"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/584166542059?text=%C2%A1Hola,%20Doctora%20Yuleima!%20Estoy%20interesada%20en%20acudir%20a%20su%20consulta"
              rel="noreferrer"
              target="_blank"
              className="footer__social--a"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:drayuleimaperezgin@hotmail.com"
              rel="noreferrer"
              target="_blank"
              className="footer__social--a"
            >
              <FaRegEnvelope />
            </a>
          </div>
        </div>

        <div className="footer__info">
          <h3 className="footer__titulo--h3">Información</h3>
          <p className="footer__info--p">
            <FaLocationDot /> Carrera 18, esquina Calle 23. Edificio Centro Empresarial. Cuarto Piso, Oficina 4-7.
          </p>
          <p className="footer__info--p">
            <FaEarthAmericas /> Barquisimeto -
            Venezuela
          </p>

          <p className="footer__info--p">
            <FaClock /> Lunes, Miércoles y Viernes.
            8:00 am - 2:00 pm
          </p>
        </div>
      </div>

      <div className="copyright">
        <div className="copyright__grid">
          <p className="copyright__p">
            © {new Date().getFullYear()} Dra. Yuleima Pérez. Todos los derechos
            reservados.
          </p>

          <a
            href="https://github.com/ARLA-Dev"
            rel="noreferrer"
            target="_blank"
            className="copyright__p copyright__p--a"
          >
            <p>Diseñado por</p>

            <div className="copyright__arla">
              <span className="copyright__arla--span">ARLA</span>
              <img src="/img/ARLA.png" alt="Logo de ARLA" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
