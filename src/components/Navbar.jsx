import { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/Context'; // Importamos el contexto
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'; // Importamos iconos

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Consumimos el contexto

  return (
    <Navbar bg={isDarkMode ? 'dark' : 'primary'} variant="dark" expand="lg" transition="0.5s">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/sobre-mi">Sobre Mí</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            
            {/* Botón de cambio de tema */}
            <Button 
              variant="outline-light" 
              onClick={toggleTheme} 
              className="ms-lg-3 mt-2 mt-lg-0 border-0"
            >
              {isDarkMode ? <BsSun /> : <BsMoonStarsFill />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;