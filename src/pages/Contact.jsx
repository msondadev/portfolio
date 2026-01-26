import { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importante para que se vea bien la alerta
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const formRef = useRef(); // Referencia al formulario
  const [loading, setLoading] = useState(false); // Estado para bloquear el botón mientras envía

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // IMPORTANTE: Reemplaza estos valores con los que obtuviste en EmailJS
    // ('TU_SERVICE_ID', 'TU_TEMPLATE_ID', formRef.current, 'TU_PUBLIC_KEY')
    emailjs.sendForm('service_id_ejemplo', 'template_id_ejemplo', formRef.current, 'public_key_ejemplo')
      .then(() => {
        toast.success('¡Mensaje enviado con éxito! 🚀');
        formRef.current.reset(); // Limpia el formulario
      })
      .catch((error) => {
        console.error(error);
        toast.error('Hubo un error al enviar. Intenta nuevamente.');
      })
      .finally(() => {
        setLoading(false); // Desbloquea el botón
      });
  };

  return (
    <Container className="py-5">
      {/* Contenedor de las notificaciones */}
      <ToastContainer position="bottom-right" theme="colored" />
      
      <h1 className="text-center mb-5 display-4 fw-bold">Contacto</h1>
      
      <Row className="justify-content-center">
        {/* Columna del Formulario */}
        <Col md={7} lg={6} className="mb-5 mb-md-0">
          <div className="p-4 shadow rounded bg-body-tertiary">
            <h4 className="mb-4">Envíame un mensaje</h4>
            <Form ref={formRef} onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                  type="text" 
                  name="user_name" 
                  placeholder="Tu nombre" 
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  name="user_email" 
                  placeholder="nombre@ejemplo.com" 
                  required 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control 
                  as="textarea" 
                  name="message" 
                  rows={5} 
                  placeholder="Escribe tu consulta aquí..." 
                  required 
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit" size="lg" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </div>
            </Form>
          </div>
        </Col>

        {/* Columna de Información de Contacto */}
        <Col md={5} lg={4} className="d-flex flex-column justify-content-center ps-md-5">
          <h3 className="mb-4">O encuéntrame en:</h3>
          <p className="lead mb-4 text-muted">
            Siempre estoy interesado en escuchar sobre nuevos proyectos y oportunidades.
          </p>
          
          <div className="d-flex flex-column gap-3">
            <a href="mailto:tuemail@gmail.com" className="text-decoration-none h5 d-flex align-items-center">
              <FaEnvelope className="me-3 text-danger" /> tuemail@gmail.com
            </a>
            <a href="https://linkedin.com/in/martinsonda" target="_blank" rel="noreferrer" className="text-decoration-none h5 d-flex align-items-center">
              <FaLinkedin className="me-3 text-primary" /> LinkedIn
            </a>
            <a href="https://github.com/msondadev" target="_blank" rel="noreferrer" className="text-decoration-none h5 d-flex align-items-center">
              <FaGithub className="me-3 text-dark" /> GitHub
            </a>
            <a href="https://wa.me/2215862553" target="_blank" rel="noreferrer" className="text-decoration-none h5 d-flex align-items-center">
              <FaWhatsapp className="me-3 text-success" /> WhatsApp
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};