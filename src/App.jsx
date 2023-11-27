import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Mapa from "./components/Mapa"
import SobreMi from "./components/SobreMi"

function App() {

  return (
    <>
      <Header/>
      <div className="contenido">
        <Hero />
        <SobreMi />
        <Mapa />
        <Footer />
      </div>
      
    </>
  )
}

export default App
