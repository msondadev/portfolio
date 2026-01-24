import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

// Estilo para la imagen de perfil
const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const About = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Columna Izquierda: Imagen y redes rápidas */}
        <Col md={5} className="text-center mb-4 mb-md-0">
          <ProfileImage 
            src="https://via.placeholder.com/300" // Aquí pondrás tu avatar después
            alt="Tu Nombre" 
          />
          <div className="mt-3">
            <h3 className="fw-bold">Tu Nombre</h3>
            <p className="text-primary fw-bold">Desarrollador Full Stack Jr.</p>
          </div>
        </Col>

        {/* Columna Derecha: Información detallada */}
        <Col md={7}>
          <h1 className="mb-4">Sobre Mí</h1>
          <p className="lead">
            Soy un apasionado de la tecnología y estudiante de **Desarrollo de Software**. 
            Me enfoco en crear soluciones eficientes, limpias y fáciles de usar.
          </p>
          
          <Row className="mt-4">
            <Col sm={12} className="mb-3">
              <div className="d-flex align-items-start">
                <FaGraduationCap className="me-3 text-primary h3" />
                <div>
                  <h5>Educación</h5>
                  <p className="text-muted">Estudiante de [Tu Carrera/Tecnicatura] en [Tu Institución].</p>
                </div>
              </div>
            </Col>
            
            <Col sm={12} className="mb-3">
              <div className="d-flex align-items-start">
                <FaCode className="me-3 text-primary h3" />
                <div>
                  <h5>Stack Técnico</h5>
                  <p className="text-muted">Especializado en el ecosistema de React para el Frontend y Java (Spring Boot) para el Backend.</p>
                </div>
              </div>
            </Col>

            <Col sm={12} className="mb-3">
              <div className="d-flex align-items-start">
                <FaLightbulb className="me-3 text-primary h3" />
                <div>
                  <h5>Objetivo</h5>
                  <p className="text-muted">Busco mi primera oportunidad profesional para aportar valor en proyectos reales y seguir creciendo como desarrollador.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};