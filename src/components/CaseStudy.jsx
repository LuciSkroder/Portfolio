import { useTranslation } from "react-i18next";

export default function CaseStudy() {
  const { t } = useTranslation();

  return (
  <section className="case-grid">
    <article>
        <h2 h2>Casestudy -</h2>
        <h2> Steno Museum, {t("steno")}</h2>
    </article>
    <aside><img className="stairs" src="https://luciskroder.github.io/Portfolio/imgs/case-stairs.png" alt="Picture of stairs in a forest" /></aside>
  </section>);
}
