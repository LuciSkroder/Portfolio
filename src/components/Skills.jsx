import { useTranslation } from "react-i18next";
import SkillRating from "../components/SkillRating";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section className="hp-skills">
      <article className="offer-box">
        <h2>{t("offer-titel")}</h2>
        <p>{t("offer-text")}</p>
        <section className="hp-programs">
          <img
            className="icon"
            src="https://luciskroder.github.io/Portfolio/imgs/react.svg"
            alt="React logo"
          />
          <div>
            <div className="row">
              <h3>React</h3>
              <SkillRating rating={3}></SkillRating>
            </div>
            <p>{t("react")}</p>
          </div>
          <img
            className="icon"
            src="https://luciskroder.github.io/Portfolio/imgs/firebase-logo.png"
            alt="Firebase logo"
          />
          <div>
            <div className="row">
              <h3>Firebase</h3>
              <SkillRating rating={2}></SkillRating>
            </div>
            <p>{t("firebase")}</p>
          </div>
          <img
            className="icon"
            src="https://luciskroder.github.io/Portfolio/imgs/figma-icon.png"
            alt="Figma logo"
          />
          <div>
            <div className="row">
              <h3>Figma</h3>
              <SkillRating rating={3}></SkillRating>
            </div>
            <p>{t("figma")}</p>
          </div>
          <img
            className="icon"
            src="https://luciskroder.github.io/Portfolio/imgs/illustrator-icon.png"
            alt="Illustrator logo"
          />
          <div>
            <div className="row">
              <h3>Illustrator</h3>
              <SkillRating rating={2}></SkillRating>
            </div>
            <p>{t("illustrator")}</p>
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
  );
}
