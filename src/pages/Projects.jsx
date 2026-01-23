import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

export const Projects = () => {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una llamada a API con un pequeño delay
    const obtenerProyectos = async () => {
      try {
        // En Vite, los archivos en src/data se acceden así:
        const response = await fetch('/src/data/proyectos.json');
        const data = await response.json();
        setProyectos(data);
      } catch (error) {
        console.error("Error cargando proyectos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProyectos();
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Cargando mis proyectos...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Mis Proyectos</h1>
      <Row g={4}>
        {proyectos.map((proyecto) => (
          <Col key={proyecto.id} xs={12} md={6} lg={4} className="mb-4">
            <ProjectCard proyecto={proyecto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};