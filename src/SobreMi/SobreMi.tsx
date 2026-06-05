const focusAreas = [
  "APIs con buenas prácticas y arquitectura limpia",
  "Automatización de procesos y despliegues",
  "Análisis predictivo, dashboards y datos accionables",
  "Aplicaciones móviles con Flutter",
];

const learning = [
  "Arquitectura hexagonal",
  "Docker y despliegue de APIs",
  "Cloud deployment",
  "CI/CD",
  "Terraform",
];

function SobreMi() {
  return (
    <section id="sobremi" className="section about-section">
      <div className="section-heading">
        <p className="eyebrow">Sobre mí</p>
        <h2>Construyo desde la curiosidad, con foco en producto y backend.</h2>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            Soy Ingeniero de Sistemas y desarrollador fullstack en formación.
            Me interesa crear software que no solo funcione, sino que sea fácil
            de entender, mantener y desplegar.
          </p>
          <p>
            He trabajado con proyectos móviles, APIs, automatizaciones, cloud,
            tableros interactivos y análisis de datos. Mi norte actual es
            fortalecer backend, arquitectura de software, DevOps y buenas
            prácticas de entrega.
          </p>
        </div>

        <div className="focus-list" aria-label="Áreas de enfoque">
          {focusAreas.map((area) => (
            <article key={area}>
              <span aria-hidden="true" />
              <p>{area}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="learning-strip" aria-label="Actualmente aprendiendo">
        <strong>Actualmente aprendiendo</strong>
        <div>
          {learning.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
