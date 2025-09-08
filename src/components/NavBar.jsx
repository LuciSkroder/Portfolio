import { NavLink } from "react-router";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import FavIcon from "../assets/facicon-l.svg?react";

export default function NavBar() {
  const { t } = useTranslation();
  return (
    <div>
      <FavIcon className="personal-logo" />
      <nav>
        <NavLink to="/cv">CV</NavLink>
        <NavLink to="/" end>
          {t("Home")}
        </NavLink>
        <NavLink to="/projects">{t("Projects")}</NavLink>
      </nav>
      <LanguageSelector />
    </div>
  );
}
