
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  const position = [10.0650424, -69.314625];
  


  return (
    <div className="mapa">
      <h2 className="mapa__titulo">Mi Ubicación</h2>
      <div className="mapa__contenedor">
        <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup autoClose={false} closeOnClick={false}>
              <div className="mapa__popup">
                <aside>
                  <img src="/img/logo.png" alt="Logo de la doctora" />
                </aside>
                <div>
                  <h4>Dra. Yuleima Pérez</h4>
                  <p>Edif. Cavendes, consultorio 1-6</p>
                  <small>Consultorio Médico</small>
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapa;
