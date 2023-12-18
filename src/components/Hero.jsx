const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero__grid">
        <div className="hero__contenido">
          <h1 className="hero__titulo">Dra. Yuleima Pérez</h1>

          <p className="hero__subtitulo">
            Médico Especialista en Ginecología y Obstetricia
          </p>

          <p className="hero__texto">
            Durante más de dos décadas he tenido el privilegio de acompañar a
            miles de mujeres en su viaje de salud y bienestar. Mi compromiso va
            más allá de la experiencia; se trata de ofrecer una atención cálida,
            dedicada y experta en cada etapa de su vida.
          </p>

          <a href="#" className="hero__boton">
            Ver Servicios
          </a>
        </div>

        <div className="hero__imagen">
          <div className="hero__img">

            <picture>
              <source
                srcSet="/img/DraDePie.avif"
                type="image/avif"
              />
              <source
                srcSet="/img/DraDePie.webp"
                type="image/webp"
              />
              <img
                src="/img/DraDePie.png"
                alt="Fotografría de la Dra. Yuleima Pérez"
                width={416}
                height={"auto"}
              />
            </picture>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
