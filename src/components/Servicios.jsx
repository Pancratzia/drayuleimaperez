import { FaWhatsapp } from "react-icons/fa6";

const Servicios = () => {
  return (
    <main className="servicios" id="servicios"> 

      <h2 className="servicios__titulo">Mis Servicios</h2>

      <div className="servicios__grid">

        <div className="servicios__columna">
          <ul className="servicios__lista">
            <li className="servicios__servicio">Biopsias</li>
            <li className="servicios__servicio">Citología</li>
            <li className="servicios__servicio">Colposcopia</li>
            <li className="servicios__servicio">Manejo de Climaterio</li>
            <li className="servicios__servicio">Manejo de Menopausia</li>
          </ul>
        </div>

        <div className="servicios__columna">
          <ul className="servicios__lista">
            <li className="servicios__servicio">Ecosonograma Pélvico</li>
            <li className="servicios__servicio">Ecografía transvaginal</li>
            <li className="servicios__servicio">Ecosonograma Obstétrico</li>
            <li className="servicios__servicio">Plasma rico en plaquetas</li>
            <li className="servicios__servicio">Ecografía Doppler Obstétrica</li>
          </ul>
        </div>

        <div className="servicios__columna">
          <ul className="servicios__lista">
            <li className="servicios__servicio">Descarte de patología cervical</li>
            <li className="servicios__servicio">Tratamiento de patología cervical</li>
            <li className="servicios__servicio">Consulta ginecológica y obstétrica</li>
            <li className="servicios__servicio">Tratamiento de patologías mamarias</li>
            <li className="servicios__servicio">Cirugías ginecológicas y obstétricas</li>
          </ul>
        </div>
      </div>

      <div className="servicios__contenedor-boton">
        <a href="https://wa.me/584166542059?text=%C2%A1Hola,%20Doctora%20Yuleima!%20Estoy%20interesada%20en%20acudir%20a%20su%20consulta" className="servicios__boton" rel="noreferrer" target="_blank">
          <FaWhatsapp />
            Solicita tu cita
        </a>
      </div>
    </main>
  );
};

export default Servicios;
