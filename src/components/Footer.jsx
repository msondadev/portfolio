import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  margin-top: auto; /* Empuja el footer hacia abajo si hay poco contenido */
  background-color: ${props => props.dark ? '#1a1a1a' : '#f8f9fa'};
  color: ${props => props.dark ? '#ffffff' : '#333333'};
  border-top: 1px solid rgba(0,0,0,0.1);
  transition: 0.5s;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: inherit;
  transition: transform 0.3s ease, color 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-3px);
    color: #007bff;
  }
`;

const Footer = ({ isDarkMode }) => {
  return (
    <FooterWrapper dark={isDarkMode}>
      <Container className="text-center">
        <div className="mb-3">
          <SocialLink href="https://github.com/tu-usuario" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/tu-usuario" target="_blank">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:tu-email@gmail.com">
            <FaEnvelope />
          </SocialLink>
        </div>
        <p className="mb-0 small">
          © {new Date().getFullYear()} - Hecho con ❤️ por [Tu Nombre]
        </p>
        <p className="text-muted small" style={{ fontSize: '0.75rem' }}>
          React + Bootstrap + Vite
        </p>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;