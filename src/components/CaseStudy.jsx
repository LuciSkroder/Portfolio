import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

export default function CaseStudy() {
  const { t } = useTranslation();

  return (
  <section className="case-grid">
    <article>
        <h2>Casestudy -</h2>
        <h2> Steno Museum, {t("steno")}</h2>
        <p>{t("case-text")}</p>
        <ul>
            <li>{t("case-li1")}</li>
            <li>{t("case-li2")}</li>
            <li>{t("case-li3")}</li>
        </ul>
        <h3>{t("WBS")}</h3>
        <p>{t("WBS-text")}</p>
        <ul>
            <li>{t("WBS-li1")}</li>
            <li>{t("WBS-li2")}</li>
        </ul>
        <h3>{t("color")}</h3>
        <p>{t("color-text")}</p>
        <ul>
            <li>{t("color-li1")}</li>
            <li>{t("color-li2")}</li>
        </ul>
        <h3>{t("responsive")}</h3>
        <p>{t("resp-text")}</p>
        <ul>
            <li>{t("resp-li1")}</li>
            <li>{t("resp-li2")}</li>
            <li>{t("resp-li3")}</li>
        </ul>
        <NavLink to="/projects">
            <button>{t("more")}</button>
        </NavLink>
    </article>
    <aside><img className="stairs" src="https://luciskroder.github.io/Portfolio/imgs/case-stairs.webp" alt="Picture of stairs in a forest" /></aside>
  </section>);
}
