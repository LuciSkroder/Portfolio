import { useState, useEffect } from "react";
import i18n from "../i18n";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");

    if (storedLang) {
      i18n.changeLanguage(storedLang);
      setSelectedLanguage(storedLang);
    } else {
      i18n.changeLanguage("en");
      setSelectedLanguage("en");
      localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <div className="lang-flags">
      <img
        className={`flag-margin flag-size ${
          selectedLanguage === "en" ? "flag-selected" : ""
        }`}
        src="https://luciskroder.github.io/Portfolio/imgs/uk-flag.png"
        alt="British flag"
        onClick={() => chooseLanguage("en")}
      />
      <img
        className={`flag-size ${
          selectedLanguage === "dk" ? "flag-selected" : ""
        }`}
        src="https://luciskroder.github.io/Portfolio/imgs/dk-flag.png"
        alt="Danish flag"
        onClick={() => chooseLanguage("dk")}
      />
    </div>
  );
}
