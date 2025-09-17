import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function HeroPhoto() {
  const { t } = useTranslation();
  return (
    <section className="footer">
      <ul>
        <li>Luci.skroder@gmail.com</li>
        <li>+45 25 11 64 32</li>
      </ul>
      <section>
        <img src="../assets/github.png" alt="github logo" />
        <img src="../assets/LinkedIn_icon.webp" alt="LinkedIn logo" />
      </section>
      <ul>
        <li>
          <NavLink to="/cv">CV</NavLink>
        </li>
        <li>
          <NavLink to="/" end>
            {t("Home")}
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">{t("Projects")}</NavLink>
        </li>
        <li>
          <NavLink to="/about">{t("About")}</NavLink>
        </li>
      </ul>
    </section>
  );
}
