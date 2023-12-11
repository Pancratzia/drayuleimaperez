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
    <div className="sobremi">
      <h2 className="sobremi__titulo">Sobre Mí</h2>

      <div className="sobremi__grid">
        <div className="sobremi__grid-contenido">

          <div className="sobremi__imagen">
            <div className="sobremi__img">
              <img
                src="/img/DraSentada.jpeg"
                alt="Dra. Yuleima Perez"
                data-aos="zoom-in"
              />
            </div>
          </div>

          <div className="sobremi__contenido">

            <h3 className="sobremi__h3">Dra. Yuleima Pérez</h3>

            <p className="sobremi__subtitulo">
              Especialista en Ginecología y Obstetricia
            </p>

            <p className="sobremi__texto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              ipsam dolores ratione maiores, quos iste minus optio nemo natus.
              Quaerat labore, deserunt ullam atque delectus nihil nulla in
              facere eos vero. Vel unde amet aliquam quia excepturi minima, eum
              alias animi, itaque necessitatibus ea laudantium? Odit id itaque
              modi, ut a corporis sed optio possimus molestiae amet sunt
              voluptatem, ad pariatur, natus nam ex. Excepturi, placeat atque.
              Dolore culpa, officiis illo sunt minus ratione nulla.
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
