import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const highlights = [
  "Backend",
  "Cloud",
  "Automatización",
  "Data",
  "Flutter",
];

function Home() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Medellín, Colombia · Ingeniero de Sistemas</p>
        <h1>
          Soy Santiago Tuberquia,
          <span> Darkitas en el mundo tech.</span>
        </h1>
        <p className="hero-lead">
          Desarrollador de software enfocado en backend, cloud, automatización
          y productos que conectan datos, APIs y experiencias reales.
        </p>

        <div className="hero-actions" aria-label="Acciones principales">
          <a className="button primary" href="#proyectos">
            Ver proyectos <FiArrowDown aria-hidden="true" />
          </a>
          <a
            className="button ghost"
            href="/cv/CV_SantiagoTuberquia.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="social-row" aria-label="Perfiles profesionales">
          <a
            href="https://github.com/Darkitas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/santiago-tuberquia-correa-32616b246/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>

      <aside className="hero-panel" aria-label="Resumen profesional">
        <div className="profile-frame">
          <img src="/images/profile.jpg" alt="Santiago Tuberquia" />
        </div>
        <div>
          <p className="panel-kicker">
            Disponible para aprender, construir y colaborar
          </p>
          <h2>Backend · Cloud · Automatización</h2>
        </div>
        <div className="highlight-grid">
          {highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default Home;
