import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/Context'; 
import Navigation from './components/Navbar';
import Footer from './components/Footer'; 
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Services } from './pages/Services';
// 1. AOS - librería y CSS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  const { isDarkMode } = useContext(ThemeContext);

  // 2. AOS - Inicializamos dentro de un useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,     // Los elementos tardan 1 seg en aparecer
      once: false,        // Las animaciones se repitan al subir/bajar
      mirror: true,       // Hace que los elementos se animen también al subir.
      offset: 100,        // Empieza a animar 100px antes de que el elemento sea visible
      disable: false,
      startEvent: 'DOMContentLoaded', // Asegura que espere a la carga del HTML
      easing: 'ease-out-cubic', // Le da un movimiento más natural, no tan lineal
      // easing: 'ease-out-back', // Un efecto con un poquito más de "onda".
    });

    // Este pequeño hack ayuda mucho en React
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);


  return (
      /* Sacamos 'min-vh-100' del div principal para que el body maneje el scroll natural */
      <div className={`${isDarkMode ? 'main-bg-dark' : 'main-bg-light'} w-100`}>
        
        <Navigation /> 
        
        {/* ESTE DIV 'container' SOLO envuelve las rutas. Al no envolver al Footer, 
        el Footer puede ser libre y medir el 100%. */}

        {/* --- VERSIÓN ONE-PAGE --- */}
        <main style={{ paddingTop: '80px' }}>  
          <section id="inicio"><Home /></section>
          <section id="sobre-mi"><About /></section>
          <section id="proyectos"><Projects /></section>
          <section id="servicios"><Services /></section>
          <section id="contacto"><Contact /></section>
        </main>  

        {/* --- VERSIÓN MULTI-PÁGINA (COMENTADA POR SI QUIERO VOLVER) ---
      <div className="container flex-grow-1" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </div>
      */}

        {/* Le pasamos el modo al Footer */}
        <Footer isDarkMode={isDarkMode} />
        
      </div>
    
  );
}

export default App;







