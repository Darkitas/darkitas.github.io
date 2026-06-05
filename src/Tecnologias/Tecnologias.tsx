import {
  SiAngular,
  SiDart,
  SiDocker,
  SiDotnet,
  SiFlutter,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiPython,
  SiSharp,
  SiTerraform,
} from "react-icons/si";
import { FiDatabase, FiGitBranch, FiServer } from "react-icons/fi";
import type { IconType } from "react-icons";

type TechGroup = {
  title: string;
  description: string;
  items: Array<{
    name: string;
    icon: IconType;
  }>;
};

const techGroups: TechGroup[] = [
  {
    title: "Lenguajes",
    description: "Base para backend, scripts, datos y apps móviles.",
    items: [
      { name: "C#", icon: SiSharp },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    title: "Backend y datos",
    description: "APIs, persistencia, análisis y tableros interactivos.",
    items: [
      { name: ".NET", icon: SiDotnet },
      { name: "REST APIs", icon: FiServer },
      { name: "SQL", icon: FiDatabase },
      { name: "Machine Learning", icon: SiPython },
    ],
  },
  {
    title: "Cloud y DevOps",
    description: "Automatización, contenedores e infraestructura como código.",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Terraform", icon: SiTerraform },
      { name: "Git", icon: FiGitBranch },
    ],
  },
  {
    title: "Frontend y mobile",
    description: "Interfaces web y aplicaciones móviles conectadas a servicios.",
    items: [
      { name: "Angular", icon: SiAngular },
      { name: "Flutter", icon: SiFlutter },
      { name: "GitHub", icon: SiGithub },
      { name: "Clean Code", icon: FiServer },
    ],
  },
];

function Tecnologias() {
  return (
    <section id="tecnologias" className="section tech-section">
      <div className="section-heading">
        <p className="eyebrow">Stack técnico</p>
        <h2>Tecnologías que conectan producto, nube y datos.</h2>
      </div>

      <div className="tech-grid">
        {techGroups.map((group) => (
          <article className="tech-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="tech-list">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <span key={item.name}>
                    <Icon aria-hidden="true" />
                    {item.name}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;
