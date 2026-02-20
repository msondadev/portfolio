import { FaCode, FaPaintBrush, FaMobileAlt, FaSearchDollar } from "react-icons/fa";

export const services = [
  {
    id: 1,
    titulo: "Sitios Web Institucionales",
    descripcion: (
      <>
        <p>Tu carta de presentación digital. Ideal para pymes, emprendedores o profesionales que necesitan establecer su presencia en internet.</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Diseño adaptable a celulares y computadoras.</li>
          <li>Secciones clave: Inicio, Nosotros, Servicios, Contacto.</li>
          <li>Botón de WhatsApp integrado.</li>
          <li>Estructura lista para posicionamiento en Google (SEO básico).</li>
        </ul>
      </>
    ),
    icono: <FaCode size={40} />
  },
  {
    id: 2,
    titulo: "Landing Pages",
    descripcion: (
      <>
        <p>Diseñadas para convertir visitas en clientes. Webs de una sola página enfocadas 100% en que el usuario vea tu propuesta y te contacte.</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Carga ultra rápida para no perder visitantes.</li>
          <li>Llamadas a la acción (CTAs) estratégicas.</li>
          <li>Formularios de contacto funcionales.</li>
          <li>Enlaces anclados para una navegación fluida.</li>
        </ul>
      </>
    ),
    icono: <FaMobileAlt size={40} />
  },
  {
    id: 3,
    titulo: "Soluciones a Medida | Integraciones",
    descripcion: (
      <>
        <p>Llevamos tu idea al código. Para proyectos que salen de lo estándar, ya sea conectar tu web con otras herramientas o explorar apps móviles.</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Integraciones con servicios externos (APIs).</li>
          <li>Automatización de correos o formularios.</li>
          <li>Desarrollo de Apps Nativas bajo análisis previo.</li>
          <li>Trabajo escalable y planificado.</li>
        </ul>
      </>
    ),
    icono: <FaSearchDollar size={40} />
  }
];