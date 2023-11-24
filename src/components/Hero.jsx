const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__grid">
        <div className="hero__contenido">
          <h1 className="hero__titulo">Dra. Yuleima Pérez</h1>

          <p className="hero__subtitulo">
            Médico Especialista en Ginecología y Obstetricia
          </p>

          <p className="hero__texto">
            Por más de 20 años, la Dra. Yuleima Pérez ha brindado un servicio de
            alta calidad a miles de pacientes, quienes pueden contar con un
            profesional con gran dedicación, excelente trato y amplia experiencia en el área.
          </p>

          <a href="#" className="hero__boton">
            Ver Servicios
          </a>
        </div>

        <div className="hero__imagen">
          <div className="hero__img">
            <img
              src="/img/yuleima.webp"
              alt="Fotografría de la Dra. Yuleima Pérez"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
