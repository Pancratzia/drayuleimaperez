
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  const position = [10.0651572, -69.3142143];
  
  let violet = new L.Icon({
    iconUrl: '/img/marker.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  return (
    <div className="mapa" id="ubicacion">
      <h2 className="mapa__titulo">Mi Ubicación</h2>
      <div className="mapa__contenedor">
        <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={violet}>
            <Popup autoClose={false} closeOnClick={false}>
              <div className="mapa__popup">
                <aside>
                  <img src="/img/logo.png" alt="Logo de la doctora" />
                </aside>
                <div>
                  <h4>Dra. Yuleima Pérez</h4>
                  <p>Edif. Centro Empresarial, Consultorio 4-7</p>
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
