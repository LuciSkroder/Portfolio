import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section>
      <article>
        <section>
          <div>
            <h2>{t("soft-title")}</h2>
            <img src="https://luciskroder.github.io/Portfolio/imgs/person.png" alt="" />
          </div>
          <p>{t("soft-text")}</p>
        </section>
        <section>
          <img src="" alt="" />
          <img src="" alt="" />
        </section>
      </article>
      <article>
        <section>
          <div>
            <h2>{t("photo-title")}</h2>
            <img src="https://luciskroder.github.io/Portfolio/imgs/Camera.png" alt="" />
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
            <img src="https://luciskroder.github.io/Portfolio/imgs/Pen tool.png" alt="" />
          </div>
          <p>{t("hobby-text")}</p>
        </section>
      </article>
    </section>
  );
}
