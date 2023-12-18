/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Carta = (props) => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className="carta" data-aos="flip-left">
      <h1 className="carta__titulo">{props.titulo}</h1>

      <picture>
        <source
          srcSet={props.imagen + ".avif"}
          type="image/avif"
        />
        <source
          srcSet={props.imagen + ".webp"}
          type="image/webp"
        />
        <img
          className="carta__img"
          src={props.imagen + ".png"}
          alt={`Imagen de ${props.titulo}`}
          loading="lazy"
          width={100}
          height={"auto"}
        />
      </picture>

      <p className="carta__texto">{props.texto}</p>
    </div>
  );
};
