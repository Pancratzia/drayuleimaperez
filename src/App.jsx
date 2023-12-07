import Header from "./components/Header"
import Hero from "./components/Hero"
import SobreMi from "./components/SobreMi"
import Servicios from "./components/Servicios"
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
        <Horario />
        <Mapa />
        <Footer />
      </div>
      
    </>
  )
}

export default App
