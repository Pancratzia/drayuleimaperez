export const Carta = ({titulo, imagen, texto}) => {
    return (
        <div className="carta">
            <h1 className="carta__titulo">{titulo}</h1>
            <img className="carta__img" src={imagen} alt={`Imagen de ${titulo}`} />
            <p className="carta__texto">{texto}</p>
        </div>
    );
}