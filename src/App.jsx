import Header from "./components/Header"
import Hero from "./components/Hero"
import SobreMi from "./components/SobreMi"
import Servicios from "./components/Servicios"
import { Galeria } from "./components/Galeria"
import Horario from "./components/horario"
import Mapa from "./components/Mapa"
import Footer from "./components/Footer"





function App() {

  return (
    <>
      <Header/>
      <div className="contenido">
        <Hero />
        <SobreMi />
        <Servicios />
        <Galeria />
        <Horario />
        <Mapa />
        <Footer />
      </div>
      
    </>
  )
}

export default App
