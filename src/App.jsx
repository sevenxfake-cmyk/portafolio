import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner.jsx';
import Perfil from './components/Perfil/Perfil.jsx';
import Habilidades from './components/Habilidades/Habilidades.jsx';
import Proyectos from './components/Proyectos/Proyectos.jsx';
import Certificados from './components/Certificados/Certificados.jsx';
import Servicios from './components/Servicios/Servicios.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Perfil />
        <Habilidades />
        <Certificados />
        <Proyectos />
        {/* Sección adicional para que el enlace "Servicios" de la guía funcione. */}
        <Servicios />
        <Contacto />
      </main>
    </>
  );
}

export default App;
