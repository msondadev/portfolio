import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/servicios'; // Importamos la data

export const Services = () => {
  return (
    <Container className="py-5" style={{ minHeight: '80vh' }}>
      <h1 className="text-center mb-5 fw-bold">
        Mis <span className="text-gradient">Servicios</span>
      </h1>
      
      <Row className="g-4 justify-content-center">
        {services.map((servicio) => (
          <Col key={servicio.id} xs={12} md={6} lg={4} className="mb-4">
            <ServiceCard servicio={servicio} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};