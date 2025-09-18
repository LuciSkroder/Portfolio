import { useTranslation } from "react-i18next";
import HeroPhoto from "../components/HeroPhoto";
import Skills from "../components/Skills";


export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex-box">
      <section className="hp-intro">
        <HeroPhoto></HeroPhoto>
        <h1>Luci Gabriella Skrøder</h1>
        <h2>{t("home-title")}</h2>
        <p className="home-text">{t("home-text-1")}</p>
        <p className="home-text">{t("home-text-2")}</p>
      </section>
      <Skills></Skills>
      <section className="hp-case"></section>
    </div>
  );
}
