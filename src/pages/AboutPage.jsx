import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section>
      <article className="about-box">
        <section className="share">
          <div className="hobby-line">
            <h2>{t("soft-title")}</h2>
            <img className="hobby-logo" src="https://luciskroder.github.io/Portfolio/imgs/person.png" alt="Small icon of a person" />
          </div>
          <p>{t("soft-text")}</p>
        </section>
        <section className="share">
          <div className="hobby-line">
            <img className="soft-img" src="https://luciskroder.github.io/Portfolio/imgs/softskills-2.png" alt="List of skills ranked by percentage" />
            <img className="soft-img" src="https://luciskroder.github.io/Portfolio/imgs/softskills-1.png" alt="Diagram of colors corrosponding to certain skills" />
          </div>
        </section>
      </article>
      <article className="about-box">
        <section className="share">
          <div className="hobby-line">
            <h2>{t("photo-title")}</h2>
            <img className="hobby-logo" src="https://luciskroder.github.io/Portfolio/imgs/Camera.png" alt="Small icon of a camera" />
          </div>
          <p>{t("photo-text")}</p>
        </section>
        <section className="share">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </section>
      </article>
      <article className="about-box">
        <section className="share">
          <div className="hobby-line">
            <h2>{t("hobby-title")}</h2>
            <img className="hobby-logo" src="https://luciskroder.github.io/Portfolio/imgs/Pen tool.png" alt="Small icon of a cursive pen" />
          </div>
          <p>{t("hobby-text")}</p>
        </section>
      </article>
    </section>
  );
}
