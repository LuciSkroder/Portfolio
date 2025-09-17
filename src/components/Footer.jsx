import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function HeroPhoto() {
  const { t } = useTranslation();
  return (
    <section className="footer">
      <div>
        <h4>{t("contact")}:</h4>
        <ul>
          <li>Luci.skroder@gmail.com</li>
          <li>+45 25 11 64 32</li>
        </ul>
      </div>
      <section>
        <img
          src="https://luciskroder.github.io/Portfolio/imgs/github.png"
          alt="github logo"
        />
        <img
          src="https://luciskroder.github.io/Portfolio/imgs/LinkedIn_icon.webp"
          alt="LinkedIn logo"
        />
      </section>
      <div>
        <p>Links:</p>
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
      </div>
    </section>
  );
}
