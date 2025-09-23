import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    async function getData() {
      const response = await fetch("./projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);

  return (
    <section id="projects">
      <div className="headline-container">
        <h1>{t("ProjectsHead")}</h1>
      </div>
      {projects.map(project => (
        <Projects project={project} key={project.id} />
      ))}
    </section>
  );
}