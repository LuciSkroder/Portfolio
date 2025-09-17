import { NavLink } from "react-router";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import FavIcon from "../assets/favicon-l.svg?react";

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <div>
      <NavLink to="/" end>
        <FavIcon className="personal-logo" />
      </NavLink>
      <nav>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/" end>
          {t("Home")}
        </NavLink>
        <NavLink to="/projects">{t("Projects")}</NavLink>
        <NavLink to="/about">{t("About")}</NavLink>
      </nav>
      <LanguageSelector />
    </div>
  );
}
