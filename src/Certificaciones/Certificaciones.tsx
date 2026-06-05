import { FiAward, FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    title: "Estructuras de datos con Python",
    issuer: "Diploma",
    href: "/certifications/diploma-estructuras-datos-python_SantiagoTuberquia.pdf",
  },
  {
    title: "Git y GitHub",
    issuer: "Diploma",
    href: "/certifications/diploma-git-github_SantiagoTuberquia.pdf",
  },
  {
    title: "JavaScript Clean Code",
    issuer: "Diploma",
    href: "/certifications/diploma-javascript-clean-code_SantiagoTuberquia.pdf",
  },
  {
    title: "JavaScript Fundamentos",
    issuer: "Diploma",
    href: "/certifications/diploma-javascript-fundamentos_SantiagoTuberquia.pdf",
  },
  {
    title: "Fundamentos de Python",
    issuer: "Diploma",
    href: "/certifications/FundamentosPython_SantiagoTuberquia.pdf",
  },
];

function Certificaciones() {
  return (
    <section id="certificaciones" className="section certifications-section">
      <div className="section-heading">
        <p className="eyebrow">Formación</p>
        <h2>Certificaciones que respaldan mi base técnica.</h2>
      </div>

      <div className="certification-grid">
        {certifications.map((certification) => (
          <a
            className="certification-card"
            href={certification.href}
            target="_blank"
            rel="noopener noreferrer"
            key={certification.href}
          >
            <FiAward aria-hidden="true" />
            <span>
              <strong>{certification.title}</strong>
              <small>{certification.issuer}</small>
            </span>
            <FiExternalLink aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificaciones;
