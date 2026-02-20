import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/Context';

// Reutilizamos el estilo de tu tarjeta pero ajustamos el hover
const StyledServiceCard = styled(Card)`
  transition: all 0.3s ease-in-out;
  border: none;
  background-color: ${props => props.$isDark ? '#2b2b2b' : '#fff'} !important;
  color: ${props => props.$isDark ? '#fff' : '#000'} !important;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;
    border-bottom: 4px solid #0d6efd !important; // Un toque de color al hacer hover
  }

  .icon-wrapper {
    color: #0d6efd; // Color primario (Bootstrap primary)
    margin-bottom: 1.5rem;
    transition: transform 0.3s;
  }

  &:hover .icon-wrapper {
    transform: scale(1.1);
  }
`;

const ServiceCard = ({ servicio }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <StyledServiceCard className="h-100 p-3 p-md-4 text-center shadow-sm" $isDark={isDarkMode}>
      <Card.Body>
        <div className="icon-wrapper">
          {servicio.icono}
        </div>
        <Card.Title className="fw-bold mb-3">{servicio.titulo}</Card.Title>
        <Card.Text as="div" className={`text-start ${isDarkMode ? 'text-light opacity-75' : 'text-muted'}`}>
          {servicio.descripcion}
        </Card.Text>
      </Card.Body>
    </StyledServiceCard>
  );
};

export default ServiceCard;