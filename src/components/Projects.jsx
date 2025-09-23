import { useTranslation } from "react-i18next";

export default function Projects({ project }) {
    const { t } = useTranslation();

  return (
    <section className="project-row">
        <h2>{t(project.title)}</h2>
        <a href={project.link} target="_blank">{project.link}</a>
        <article>
            <h3>{t("Idid")}</h3>
            <p>{t(project.whatIDid)}</p>
         </article>
        <article>
            <h3>{t("Ilearn")}</h3>
            <p>{t(project.ILearned)}</p>
        </article>
        <figure>
            <img src={project.image} alt={`Image of my project: ${project.name}`} />
        </figure>
    </section>
  );
}