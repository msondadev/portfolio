import { Card, Button } from 'react-bootstrap'; 
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components'; 
import { useContext } from 'react'; 
import { ThemeContext } from '../context/Context'; 

// 1. Definimos el StyledCard con el efecto hover
const StyledCard = styled(Card)`
  transition: all 0.3s ease-in-out;
  border: none;
  overflow: hidden;
  
  // Usamos props para el fondo en modo oscuro
  background-color: ${props => props.$isDark ? '#2b2b2b' : '#fff'} !important;
  color: ${props => props.$isDark ? '#fff' : '#000'} !important;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2) !important;
  }
`;

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
    transform: translateY(-2px);
  }
`;

const ProjectCard = ({ proyecto }) => {
  const { isDarkMode } = useContext(ThemeContext); // Hook dentro de la función

  return (
    <StyledCard className="h-100 shadow-sm" $isDark={isDarkMode}> 
      <Card.Img 
        variant="top" 
        src={proyecto.imagen} 
        alt={proyecto.titulo} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{proyecto.titulo}</Card.Title>
        <Card.Text className={isDarkMode ? 'text-light' : 'text-muted'} style={{ fontSize: '0.9rem' }}>
          {proyecto.descripcion}
        </Card.Text>

        <div className="mb-3 mt-2">
          {proyecto.tecnologias.map((tech, index) => (
            <TechBadge key={index}>{tech}</TechBadge>
          ))}
        </div>

        <Button 
          variant={isDarkMode ? "outline-light" : "dark"} 
          href={proyecto.linkRepo} 
          target="_blank" 
          className="mt-auto d-flex align-items-center justify-content-center fw-bold"
        >
          <FaGithub className="me-2" /> Ver en GitHub
        </Button>
      </Card.Body>
    </StyledCard>
  );
};

export default ProjectCard;