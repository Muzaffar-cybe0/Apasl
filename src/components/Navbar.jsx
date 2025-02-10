import { useEffect, useRef, useState } from "react";
import "../sass/navbar.scss";
import "../css/hamburgers.min.css";
import Logo from "../assets/Logo.png";
import EnglishFlag from "../assets/en_flag.jpg"; // Import English flag
import RussianFlag from "../assets/ru_flag.jpg"; // Import Russian flag
import UzbekFlag from "../assets/uz_flag.jpg"; // Import Uzbek flag
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const scrollListenerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  // Set default language to English if none is selected
  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage("en"); // Default to English
    }

    scrollListenerRef.current = () => {
      setSticky(window.scrollY > 90);
    };
    window.addEventListener("scroll", scrollListenerRef.current);

    return () => {
      window.removeEventListener("scroll", scrollListenerRef.current);
    };
  }, [i18n]);

  const handleMenu = () => setMenu((p) => !p);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Use the local images for flags
  const languageFlag =
    i18n.language === "en"
      ? EnglishFlag
      : i18n.language === "ru"
      ? RussianFlag
      : UzbekFlag;

  return (
    <div className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="navbar_child-1">
        <Link to="/home">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className={`navbar_child-2 ${menu ? "menuShow" : ""}`}>
        <Link to="/home">{t("navBtn1")}</Link>
        <button onClick={() => scrollToSection("sponsors")}>
          {t("navBtn2")}
        </button>
        <button onClick={() => scrollToSection("about")}>{t("navBtn3")}</button>
        <button onClick={() => scrollToSection("speakers")}>
          {t("navBtn4")}
        </button>
        <button onClick={() => scrollToSection("organizers")}>
          {t("navBtn5")}
        </button>
        <button onClick={() => scrollToSection("schedules")}>
          {t("navBtn6")}
        </button>
        <div className={`language-dropdown ${isOpen ? "open" : ""}`}>
          <div className="selected-language" onClick={() => setIsOpen(!isOpen)}>
            <img
              src={languageFlag}
              alt={i18n.language || "en"} // Ensure default to English
              className="flag-img"
            />
            <span>{i18n.language?.toUpperCase() || "EN"}</span>{" "}
            {/* Ensure fallback */}
          </div>
          {isOpen && (
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                onClick={() => changeLanguage("en")}
              >
                <img src={EnglishFlag} alt="English" className="flag-img" />
                English
              </div>
              <div
                className="dropdown-item"
                onClick={() => changeLanguage("ru")}
              >
                <img src={RussianFlag} alt="Russian" className="flag-img" />
                Русский
              </div>
              <div
                className="dropdown-item"
                onClick={() => changeLanguage("uz")}
              >
                <img src={UzbekFlag} alt="Uzbek" className="flag-img" />
                Uzbek
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="navbar_child-3">
        <i className="fa-solid fa-bars" onClick={handleMenu}></i>
      </div>
    </div>
  );
}
