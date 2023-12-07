const Horario = () => {
  return (
    <section className="horario">
      <div className="horario__contenido">
        <h2 className="horario__titulo">Mi Horario</h2>

        <p className="horario__texto">
          Lunes, Miércoles y Viernes de 8:00am a 2:00pm
        </p>

        <p className="horario__texto--cita">Previa Cita</p>

        <div className="horario__reloj">
          <i className="fa-regular fa-calendar"></i>
        </div>
      </div>
    </section>
  );
};

export default Horario;
