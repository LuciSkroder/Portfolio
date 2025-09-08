import { useState } from "react";
import i18n from "../i18n";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const chooseLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="lang-flags">
      <img
        className="flag-margin flag-size"
        src="/public/imgs/uk-flag.png"
        alt="British flag"
        onClick={() => chooseLanguage("en")}
      />
      <img
        className="flag-size"
        src="/public/imgs/dk-flag.png"
        alt="Danish flag"
        onClick={() => chooseLanguage("dk")}
      />
    </div>
  );
}
