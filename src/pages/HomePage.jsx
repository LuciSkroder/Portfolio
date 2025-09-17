import { useTranslation } from "react-i18next";
import HeroPhoto from "../components/HeroPhoto";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex-box">
      <section className="hp-intro">
        <HeroPhoto></HeroPhoto>
        <h1>Luci Gabriella Skrøder</h1>
        <h2>{t("home-title")}</h2>
      </section>
      <section className="hp-skills">
        <aside className="photo-aside">
          <img
            src="https://luciskroder.github.io/Portfolio/imgs/me.jpg"
            alt="Personal photo"
          />
        </aside>
      </section>
      <section className="hp-case"></section>
    </div>
  );
}
