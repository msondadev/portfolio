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
      once: true,         // La animación ocurre solo la primera vez que bajás
      offset: 100,        // Empieza a animar 100px antes de que el elemento sea visible
      easing: 'ease-out-cubic', // Le da un movimiento más natural, no tan lineal
    });
  }, []);


  return (
    
      <div className={`d-flex flex-column min-vh-100 w-100 ${isDarkMode ? 'main-bg-dark' : 'main-bg-light'}`}>
        
        <Navigation /> 
        
        {/* ESTE DIV 'container' SOLO envuelve las rutas. Al no envolver al Footer, 
        el Footer puede ser libre y medir el 100%. */}
        <div className="container flex-grow-1" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>

        {/* Le pasamos el modo al Footer */}
        <Footer isDarkMode={isDarkMode} />
        
      </div>
    
  );
}

export default App;