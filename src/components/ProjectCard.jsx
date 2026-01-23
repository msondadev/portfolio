import { Card, Button } from 'react-bootstrap'; 
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components'; 

// Definimos el componente de estilo para las etiquetas de tecnología
const TechBadge = styled.span`
  background-color: rgba(0, 123, 255, 0.1); 
  color: #007bff; 
  border: 1px solid #007bff;
  padding: 4px 12px;
  border-radius: 50px; 
  font-size: 0.85rem;
  font-weight: 600;
  margin-right: 8px;
  display: inline-block;
  margin-bottom: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
    transform: translateY(-2px); /* Un pequeño salto al pasar el mouse */
  }
`;

const ProjectCard = ({ proyecto }) => {
  return (
    <Card className="h-100 shadow-sm border-0"> 
      <Card.Img 
        variant="top" 
        src={proyecto.imagen} 
        alt={proyecto.titulo} 
        style={{ height: '200px', objectFit: 'cover' }} // Para que todas las fotos midan igual
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{proyecto.titulo}</Card.Title>
        <Card.Text className="text-muted small">
          {proyecto.descripcion}
        </Card.Text>

        <div className="mb-3 mt-2">
          {proyecto.tecnologias.map((tech, index) => (
            <TechBadge key={index}>{tech}</TechBadge>
          ))}
        </div>

        <Button 
          variant="dark" 
          href={proyecto.linkRepo} 
          target="_blank" 
          className="mt-auto d-flex align-items-center justify-content-center fw-bold"
        >
          <FaGithub className="me-2" /> Ver en GitHub
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;