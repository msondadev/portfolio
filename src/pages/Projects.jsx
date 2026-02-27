import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

import { projects } from '../data/proyectos'; 

export const Projects = () => {

  return (
    <Container className="py-5" style={{ minHeight: '80vh' }}>
      <h1 className="text-center mb-5 fw-bold">
        Mis <span className="text-gradient">Proyectos</span>
      </h1>
      <Row className="g-4 justify-content-center"> 
        {/* Agregamos 'index' al map para usarlo en el delay */}
        {projects.map((proyecto, index) => (
          <Col key={proyecto.id} xs={12} 
          md={6} lg={4} 
          className="mb-4 d-flex"
          // CONFIGURACIÓN DE AOS:
          data-aos="fade-up"
          data-aos-delay={index * 100} // El primero 0ms, el segundo 100ms, etc.
          >
            <ProjectCard proyecto={proyecto} />
          </Col>
        ))}
      </Row>
      
      {projects.length === 0 && (
        <p className="text-center text-muted">Próximamente más proyectos...</p>
      )}
    </Container>
  );
};