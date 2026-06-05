import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import SobreMi from "./SobreMi/SobreMi";
import Tecnologias from "./Tecnologias/Tecnologias";
import Proyectos from "./Proyectos/Proyectos";
import Certificaciones from "./Certificaciones/Certificaciones";
import Contacto from "./Contacto/Contacto";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SobreMi />
      <Tecnologias />
      <Proyectos />
      <Certificaciones />
      <Contacto />
    </>
  );
}

export default App;
