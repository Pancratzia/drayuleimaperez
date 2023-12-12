import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Horario = () => {


  useEffect(() => {
    Aos.init();
  }, []);

  return (

    <section className="horario" id="horario">
      <div className="horario__contenido" 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <h2 className="horario__titulo" >Mi Horario</h2>

        <p className="horario__texto">
          Lunes, Miércoles y Viernes de 8:00am a 2:00pm
        </p>

        <div className="horario__reloj">
          <i className="fa-regular fa-calendar"></i>
        </div>
      </div>
    </section>
  );
};

export default Horario;
