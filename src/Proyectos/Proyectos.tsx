import {
  FiActivity,
  FiBarChart2,
  FiBox,
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiExternalLink,
  FiGitBranch,
  FiGithub,
  FiLayers,
  FiMapPin,
  FiMessageCircle,
  FiMonitor,
  FiServer,
  FiShield,
  FiSmartphone,
  FiTerminal,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import type { IconType } from "react-icons";

type ProjectFact = {
  label: string;
  value: string;
  icon: IconType;
};

type ProjectInsight = {
  label: string;
  icon: IconType;
};

type Project = {
  title: string;
  type: string;
  description: string;
  impact: string;
  stack: string[];
  icon: IconType;
  repoUrl: string;
  facts?: ProjectFact[];
  insights?: ProjectInsight[];
  featured?: boolean;
};

const tagIcons: Record<string, IconType> = {
  ".NET": FiCpu,
  Angular: FiMonitor,
  Azure: FiCloud,
  Baileys: FiMessageCircle,
  Bot: FiMessageCircle,
  "C#": FiCode,
  "CI/CD": FiGitBranch,
  Dart: FiCode,
  Dash: FiBarChart2,
  Data: FiDatabase,
  Docker: FiBox,
  "EF Core": FiDatabase,
  Flutter: FiSmartphone,
  Frontend: FiMonitor,
  Hex: FiCode,
  IA: FiZap,
  Medellín: FiMapPin,
  Mobile: FiSmartphone,
  NLP: FiZap,
  "Node.js": FiServer,
  Pandas: FiBarChart2,
  PostgreSQL: FiDatabase,
  Python: FiCode,
  REST: FiServer,
  Reseñas: FiBarChart2,
  SPA: FiMonitor,
  SQLite: FiDatabase,
  Streamlit: FiMonitor,
  "Terraform": FiTerminal,
  "The Color API": FiCloud,
  TypeScript: FiCode,
  UI: FiMonitor,
  WeatherAPI: FiCloud,
};

const getTagIcon = (tag: string) => tagIcons[tag] ?? FiLayers;

const projects: Project[] = [
  {
    title: "TechStore API en Azure",
    type: "Cloud · DevOps",
    description:
      "Despliegue de una API con infraestructura en Azure, PostgreSQL Flexible Server, máquina virtual Linux y recursos administrados con Terraform.",
    impact:
      "Muestra una ruta completa de entrega: infraestructura como código, ambiente dockerizado y base para pipelines de pruebas y producción.",
    stack: ["Azure", "Terraform", "Docker", "PostgreSQL", "CI/CD"],
    icon: FiCloud,
    repoUrl: "https://github.com/Darkitas/Despliegue_CI-CD",
    facts: [
      { label: "Gateway", value: ":3004", icon: FiServer },
      { label: "Servicios", value: "3", icon: FiLayers },
      { label: "DB", value: "PostgreSQL 16", icon: FiDatabase },
      { label: "Pipelines", value: "Pruebas + prod", icon: FiGitBranch },
    ],
    insights: [
      { label: "API Gateway con rutas para usuarios, productos y órdenes", icon: FiServer },
      { label: "Docker Compose levanta gateway, PostgreSQL y microservicios", icon: FiBox },
      { label: "Terraform crea Resource Group, red, VM Linux y PostgreSQL Flexible Server", icon: FiTerminal },
      { label: "GitHub Actions valida cobertura en develop y main antes de producción", icon: FiShield },
    ],
    featured: true,
  },
  {
    title: "Estudiantes API hexagonal",
    type: "Backend · C#",
    description:
      "API REST pequeña en ASP.NET Core para gestión de estudiantes, organizada por dominio, aplicación, infraestructura y capa API.",
    impact:
      "Buen ejercicio de arquitectura hexagonal, Entity Framework, PostgreSQL y ejecución local con Docker Compose.",
    stack: [".NET", "C#", "PostgreSQL", "Docker", "EF Core"],
    icon: FiCpu,
    repoUrl: "https://github.com/Darkitas/MicroApiWithDocker",
    featured: true,
  },
  {
    title: "Weather App",
    type: "Mobile · Flutter",
    description:
      "Aplicación móvil en Flutter que consume WeatherAPI.com para consultar meteorología, temperatura, humedad y condiciones del cielo.",
    impact:
      "Conecta UI móvil, consumo de API REST y estados visuales para una experiencia útil enfocada en clima.",
    stack: ["Flutter", "Dart", "WeatherAPI", "REST", "Mobile"],
    icon: FiSmartphone,
    repoUrl: "https://github.com/Darkitas/Weather_App",
    featured: true,
  },
  {
    title: "Generador de colores",
    type: "Mobile · Flutter",
    description:
      "Aplicación Flutter que genera paletas aleatorias usando The Color API y permite trabajar con códigos hexadecimales.",
    impact:
      "Explora consumo de APIs externas, persistencia de la última paleta y una experiencia visual centrada en color.",
    stack: ["Flutter", "Dart", "The Color API", "Hex", "UI"],
    icon: FiSmartphone,
    repoUrl: "https://github.com/Darkitas/Generador_de_Colores",
  },
  {
    title: "BS Bot Tracker",
    type: "Automatización · WhatsApp",
    description:
      "Bot para comunidades de WhatsApp que registra actividad, reporta usuarios inactivos y envía mensajes de bienvenida.",
    impact:
      "Convierte moderación manual en seguimiento medible con reportes locales y configuración por entorno.",
    stack: ["Node.js", "TypeScript", "Baileys", "SQLite", "Bot"],
    icon: FiMessageCircle,
    repoUrl: "https://github.com/Darkitas/BS_Bot_tracker",
  },
  {
    title: "Accidentalidad en Medellín",
    type: "Analítica urbana",
    description:
      "Aplicación en Python con Dash para analizar datos de accidentalidad en Medellín desde un archivo de Excel o CSV.",
    impact:
      "Une datos locales, visualización y análisis temporal para entender patrones de accidentes en la ciudad.",
    stack: ["Python", "Dash", "Pandas", "Data", "Medellín"],
    icon: FiActivity,
    repoUrl: "https://github.com/Darkitas/Accidentalidad_with_Dash",
  },
  {
    title: "Análisis de reseñas con IA",
    type: "Data · IA",
    description:
      "Aplicación en Streamlit para analizar reseñas de productos con inteligencia artificial y clasificar referencias de opinión.",
    impact:
      "Ayuda a leer señales de calidad, percepción y satisfacción a partir de comentarios de usuarios.",
    stack: ["Python", "Streamlit", "IA", "NLP", "Reseñas"],
    icon: FiBarChart2,
    repoUrl: "https://github.com/Darkitas/analisis_de_comentarios",
  },
  {
    title: "SpaceFace",
    type: "Red social web",
    description:
      "Aplicación en Angular que simula una red social y explora componentes, rutas e interacciones de usuario.",
    impact:
      "Sirve como práctica de frontend SPA, con alcance más experimental que los proyectos principales.",
    stack: ["Angular", "TypeScript", "SPA", "Frontend", "UI"],
    icon: FiUsers,
    repoUrl: "https://github.com/Darkitas/Space_Face",
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const secondaryProjects = projects.filter((project) => !project.featured);

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const Icon = project.icon;

  return (
    <article
      className={`project-card ${featured ? "featured" : ""} ${
        index !== undefined ? `rank-${index + 1}` : ""
      }`}
    >
      <div className="project-topline">
        <span>{project.type}</span>
        <Icon aria-hidden="true" />
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <strong>{project.impact}</strong>
      {project.facts ? (
        <div className="project-facts" aria-label={`Datos clave de ${project.title}`}>
          {project.facts.map((fact) => {
            const FactIcon = fact.icon;

            return (
              <span key={fact.label}>
                <FactIcon aria-hidden="true" />
                <small>{fact.label}</small>
                <b>{fact.value}</b>
              </span>
            );
          })}
        </div>
      ) : null}
      {project.insights ? (
        <div
          className="project-insights"
          aria-label={`Detalles técnicos de ${project.title}`}
        >
          {project.insights.map((insight) => {
            const InsightIcon = insight.icon;

            return (
              <span key={insight.label}>
                <InsightIcon aria-hidden="true" />
                {insight.label}
              </span>
            );
          })}
        </div>
      ) : null}
      <div className="tag-row">
        {project.stack.map((tech) => {
          const TagIcon = getTagIcon(tech);

          return (
            <span key={tech}>
              <TagIcon aria-hidden="true" />
              {tech}
            </span>
          );
        })}
      </div>
      <a
        className="project-link"
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir repositorio de ${project.title}`}
      >
        <FiGithub aria-hidden="true" />
        Ver repositorio
        <FiExternalLink aria-hidden="true" />
      </a>
    </article>
  );
}

function Proyectos() {
  return (
    <section id="proyectos" className="section projects-section">
      <div className="section-heading">
        <p className="eyebrow">Proyectos principales</p>
        <h2>Proyectos con repositorio, contexto técnico y foco real.</h2>
      </div>

      <div className="project-ladder" aria-label="Proyectos destacados">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            featured
            index={index}
            key={project.title}
            project={project}
          />
        ))}
      </div>

      <div className="project-archive-heading">
        <span>Más proyectos</span>
        <p>Aplicaciones móviles, automatización, análisis de datos y frontend.</p>
      </div>

      <div className="projects-grid">
        {secondaryProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
