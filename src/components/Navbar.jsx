import { useContext, useState } from 'react'; // Agregamos useState
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/Context';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  // Estado para controlar manualmente la apertura/cierre del menú
  const [expanded, setExpanded] = useState(false);

  // Función para cerrar el menú al hacer click en cualquier opción
  const closeMenu = () => setExpanded(false);

  return (
    <Navbar 
      className="shadow-sm border-bottom" 
      bg={isDarkMode ? 'dark' : 'primary'} 
      variant="dark" 
      expand="lg" 
      fixed="top"
      expanded={expanded} // Controlado por nuestro estado
      onToggle={(nextExpanded) => setExpanded(nextExpanded)} // Permite que el botón sandwich funcione
      style={{ transition: '0.5s' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
          Mi Portfolio
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" onClick={closeMenu}>
              Inicio
            </Nav.Link>
            
            <Nav.Link as={Link} to="/sobre-mi" onClick={closeMenu}>
              Sobre Mí
            </Nav.Link>
            
            <Nav.Link as={Link} to="/proyectos" onClick={closeMenu}>
              Proyectos
            </Nav.Link>
            
            <Nav.Link as={Link} to="/contacto" onClick={closeMenu}>
              Contacto
            </Nav.Link>
            
            {/* Botón de cambio de tema */}
            <Button 
              variant="outline-light" 
              onClick={() => {
                toggleTheme();
                closeMenu(); // También cerramos el menú al cambiar el modo
              }} 
              className="ms-lg-3 mt-2 mt-lg-0 border-0"
            >
              {isDarkMode ? <BsSun size={20} /> : <BsMoonStarsFill size={18} />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;