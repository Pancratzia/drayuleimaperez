const Servicios = () => {
  return (
    <main className="servicios"> 

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
        <a href="#" className="servicios__boton">
          <i className="fa-brands fa-whatsapp"></i>
            Solicita tu cita
        </a>
      </div>
    </main>
  );
};

export default Servicios;