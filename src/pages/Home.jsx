import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/Context';
import { HeroContainer, Title, SkillBadge } from '../styles/HomeStyle';
import { FaReact, FaJava, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiBootstrap } from 'react-icons/si';

export const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
  ];

  return (
    <Container>
      <HeroContainer>
        <Title>¡Hola! Soy [Tu Nombre]</Title>
        <h2 className="mb-4">Desarrollador de Software en formación</h2>
        <p className="lead mb-5" style={{ maxWidth: '600px' }}>
          Me apasiona crear soluciones tecnológicas eficientes y escalables. 
          Actualmente enfocado en el ecosistema de React y Java.
        </p>

        <div className="mt-4">
          <h3>Mis Habilidades</h3>
          <Row className="justify-content-center mt-3">
            <Col md={8}>
              {skills.map((skill, index) => (
                <SkillBadge key={index} dark={isDarkMode}>
                  {skill.icon} {skill.name}
                </SkillBadge>
              ))}
            </Col>
          </Row>
        </div>
      </HeroContainer>
    </Container>
  );
};