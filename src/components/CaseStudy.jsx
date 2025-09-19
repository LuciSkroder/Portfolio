import { useTranslation } from "react-i18next";

export default function CaseStudy() {
  const { t } = useTranslation();

  return (
  <section className="case-grid">
    <article>
        <h2 h2>Casestudy -</h2>
        <h2> Steno Museum, {t("steno")}</h2>
        <p></p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <h3>{t("WBS")}</h3>
        <p></p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <h3>{t("color")}</h3>
        <p></p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <h3>{t("responsive")}</h3>
        <p></p>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </article>
    <aside><img className="stairs" src="https://luciskroder.github.io/Portfolio/imgs/" alt="Picture of stairs in a forest" /></aside>
  </section>);
}
