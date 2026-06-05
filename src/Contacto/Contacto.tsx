import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

function Contacto() {
  return (
    <section id="contacto" className="section contact-section">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2>Siempre abierto a aprender, colaborar y construir.</h2>
          <p>
            Si tienes un proyecto backend, cloud, mobile o de datos donde pueda
            aportar y seguir creciendo, hablemos.
          </p>
        </div>

        <div className="contact-actions">
          <a
            href="mailto:santiago.tuberquia.correa@gmail.com"
            aria-label="Enviar correo a Santiago"
          >
            <FiMail aria-hidden="true" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-tuberquia-correa-32616b246/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
          <a
            href="https://github.com/Darkitas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <span>
            <FiMapPin aria-hidden="true" /> Medellín, Colombia
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
