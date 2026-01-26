import { useContext } from 'react'; // 1. Importamos useContext
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/Context'; // 2. Importamos el contexto
import Navigation from './components/Navbar';
import Footer from './components/Footer'; // 3. Importamos el Footer
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  // 4. Consumimos el estado global
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Router>
      {/* 5. Este div asegura que el footer siempre esté abajo (Sticky Footer) */}
      <div className="d-flex flex-column min-vh-100">
        
        <Navigation /> 
        
        {/* 6. flex-grow-1 hace que el contenido ocupe todo el espacio disponible */}
        <div className="container mt-4 flex-grow-1" style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>

        {/* 7. Le pasamos el modo al Footer */}
        <Footer isDarkMode={isDarkMode} />
        
      </div>
    </Router>
  );
}

export default App;