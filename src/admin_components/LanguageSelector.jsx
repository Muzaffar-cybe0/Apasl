import { useState } from "react";
import { useTranslation } from "react-i18next";
import EnglishFlag from "../assets/en_flag.jpg";
import RussianFlag from "../assets/ru_flag.jpg";
import UzbekFlag from "../assets/uz_flag.jpg";
import "../admin_Scss/languageSelector.scss";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const languageFlag =
    i18n.language === "en"
      ? EnglishFlag
      : i18n.language === "ru"
      ? RussianFlag
      : UzbekFlag;

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
        <img src={languageFlag} alt={i18n.language || "en"} className="flag" />
        {i18n.language?.toUpperCase() || "EN"}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => changeLanguage("en")}>
            <img src={EnglishFlag} alt="English" className="flag" />
            English
          </div>
          <div className="dropdown-item" onClick={() => changeLanguage("ru")}>
            <img src={RussianFlag} alt="Russian" className="flag" />
            Русский
          </div>
          <div className="dropdown-item" onClick={() => changeLanguage("uz")}>
            <img src={UzbekFlag} alt="Uzbek" className="flag" />
            Uzbek
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
