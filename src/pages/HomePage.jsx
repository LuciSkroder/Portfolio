import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex-box">
      <h1>Luci Gabriella Skrøder</h1>
      <h2>{t("home-title")}</h2>
      <aside className="photo-aside">
        <img
          src="https://luciskroder.github.io/Portfolio/imgs/me.jpg"
          alt="Personal photo"
        />
      </aside>
    </div>
  );
}
