import { useTranslation } from "react-i18next";
import HeroPhoto from "../components/HeroPhoto";
import SkillRating from "../components/SkillRating";

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
      <section className="hp-skills">
        <article className="offer-box">
          <h2>{t("offer-titel")}</h2>
          <p>{t("offer-text")}</p>
          <section className="hp-programs">
            <img src="" alt="" />
            <div>
              <div>
              <h4>React</h4>
              <SkillRating rating={3} ></SkillRating>
              </div>
              <p></p>
            </div>
          </section>
        </article>
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
