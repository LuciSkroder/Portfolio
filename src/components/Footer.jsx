import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import FavIcon from "../assets/favicon-l.svg?react";

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
        <a href="https://github.com/LuciSkroder" target="_blank">
          <img
            src="https://luciskroder.github.io/Portfolio/imgs/github.png"
            alt="github logo"
            className="icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/luci-gabriella-skr%C3%B8der-409350383/"
          target="_blank"
        >
          <img
            src="https://luciskroder.github.io/Portfolio/imgs/LinkedIn_icon.webp"
            alt="LinkedIn logo"
            className="icon"
          />
        </a>
      </section>
      <div>
        <h4>Links:</h4>
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
      <NavLink to="/" end>
        <FavIcon className="footer-logo" />
      </NavLink>
    </section>
  );
}
