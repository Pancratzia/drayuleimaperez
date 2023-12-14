import { useEffect } from "react";
import { CARTAS } from "../data/data";
import { Carta } from "./Carta";
import Aos from "aos";
import "aos/dist/aos.css";

const SobreMi = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="sobremi" id="sobremi">
      <h2 className="sobremi__titulo">Sobre Mí</h2>

      <div className="sobremi__grid">
        <div className="sobremi__grid-contenido">
          <div className="sobremi__imagen">
            <div className="sobremi__img">

              <picture>
                <source
                  srcSet="/img/DraSentada.avif"
                  type="image/avif"
                />

                <source 
                  srcSet="/img/DraSentada.webp"
                  type="image/webp"
                />

              <img
                src="/img/DraSentada.png"
                alt="Dra. Yuleima Perez"
                data-aos="zoom-in"
                width={"500px"}
                loading="lazy"
              />

              </picture>
            </div>
          </div>

          <div className="sobremi__contenido">
            <h3 className="sobremi__h3">Dra. Yuleima Pérez</h3>

            <p className="sobremi__subtitulo">
              Especialista en Ginecología y Obstetricia
            </p>

            <p className="sobremi__texto">
              Soy la Dra. Yuleima Pérez, especialista en Ginecología y
              Obstetricia, comprometida con la salud femenina. Con más de dos
              décadas de experiencia, he sido guía en el viaje de miles de
              mujeres hacia su bienestar. Mi enfoque va más allá de la mera
              práctica médica; se trata de ofrecer un cuidado cálido,
              personalizado y experto en cada etapa de la vida de mis pacientes.
              <br />
              Graduada de la Universidad Centro Occidental Lisandro Alvarado de
              Barquisimeto, mi dedicación se refleja en cada caso. Cada paciente
              recibe atención calma y personalizada, asegurando que su
              experiencia de salud sea lo más confortable posible. Como tu
              médico, me esfuerzo por explicar los términos médicos más
              complejos para que entiendas plenamente tu situación.
            </p>
          </div>
        </div>

        <aside className="sobremi__aside">
          {CARTAS.map((carta) => (
            <Carta key={carta.id} {...carta} />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default SobreMi;
