/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Carta = (props) => {

    useEffect(() => {
        Aos.init();
      }, []);

    return (
        <div className="carta" data-aos="flip-left">
            <h1 className="carta__titulo">{props.titulo}</h1>
            <img className="carta__img" src={props.imagen} alt={`Imagen de ${props.titulo}`} />
            <p className="carta__texto">{props.texto}</p>
        </div>
    );
}