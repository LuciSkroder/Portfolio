import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section>
      <article>
        <section>
          <div>
            <h2>{t("soft-title")}</h2>
            <img src="https://luciskroder.github.io/Portfolio/imgs/person.png" alt="Small icon of a person" />
          </div>
          <p>{t("soft-text")}</p>
        </section>
        <section>
          <img src="https://luciskroder.github.io/Portfolio/imgs/softskills-1.png" alt="Diagram of colors corrosponding to certain skills" />
          <img src="https://luciskroder.github.io/Portfolio/imgs/softskills-2.png" alt="List of skills ranked by percentage" />
        </section>
      </article>
      <article>
        <section>
          <div>
            <h2>{t("photo-title")}</h2>
            <img src="https://luciskroder.github.io/Portfolio/imgs/Camera.png" alt="Small icon of a camera" />
          </div>
          <p>{t("photo-text")}</p>
        </section>
        <section>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </section>
      </article>
      <article>
        <section>
          <div>
            <h2>{t("hobby-title")}</h2>
            <img src="https://luciskroder.github.io/Portfolio/imgs/Pen tool.png" alt="Small icon of a cursive pen" />
          </div>
          <p>{t("hobby-text")}</p>
        </section>
      </article>
    </section>
  );
}
