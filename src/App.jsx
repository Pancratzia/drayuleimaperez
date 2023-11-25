import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Mapa from "./components/Mapa"

function App() {

  return (
    <>
      <Header/>
      <div className="contenido">
        <Hero />

        <Mapa />
        <Footer />
      </div>
      
    </>
  )
}

export default App
