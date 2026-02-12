import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeContext } from '../context/Context';
import { HeroContainer, Title } from '../styles/HomeStyle';
import { FaReact, FaJava, FaDatabase, FaPython, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiAngular, SiJira} from 'react-icons/si';

export const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const skills = [
    { name: 'Java', icon: <FaJava color="#ED8B00" />, color: "#ED8B00" },
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" />, color: "#F7DF1E" },
    { name: 'Angular', icon: <SiAngular color="#DD0031" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" />, color: "#61DAFB" },
    { name: 'SQL', icon: <FaDatabase color="#00758F" />, color: "#00758F" },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'Figma', icon: <FaFigma color="#F24E1E" /> },   
    { name: 'Jira', icon: <SiJira color="#0052CC" /> }, 
  ];

  return (
    <Container>
      <HeroContainer>
        <h1 className="display-6 fw-bold mb-3">
          Hola, soy <span className="text-gradient">Martin Sonda</span>
        </h1>
        <h2 className={`mb-3 ${isDarkMode ? 'text-light' : 'text-dark'}`}>
          Desarrollador de Software <span>|</span> en formación
        </h2>
        
        <p className={`lead mb-5 ${isDarkMode ? 'text-light' : 'text-muted'}`} style={{ maxWidth: '600px' }}>
          Apasionado por la tecnología, el código limpio 
          y la resolución de problemas. Autodidacta y comprometido.
        </p>

        <div className="mt-5 w-100">
          <h3 className={`mb-4 ${isDarkMode ? 'text-white' : ''}`}>Herramientas y Tecnologías</h3>
          <Row className="justify-content-center">
            {skills.map((skill, index) => (
              <Col key={index} xs={4} md={2} className="text-center mb-4">
                <div style={{ fontSize: '3rem', transition: '0.3s' }} className="skill-icon">
                  {skill.icon}
                </div>
                <p className={`mt-2 fw-bold ${isDarkMode ? 'text-white' : 'text-dark'}`}>
                  {skill.name}
                </p>
              </Col>
            ))}
          </Row>
        </div>
      </HeroContainer>
    </Container>
  );
};

