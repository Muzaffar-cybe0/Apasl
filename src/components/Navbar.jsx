import { useEffect, useRef, useState } from "react";
import "../sass/navbar.scss";
import "../css/hamburgers.min.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const scrollListenerRef = useRef(null);

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    scrollListenerRef.current = () => {
      setSticky(window.scrollY > 90);
    };
    window.addEventListener("scroll", scrollListenerRef.current);

    return () => {
      window.removeEventListener("scroll", scrollListenerRef.current);
    };
  }, []);

  const handleMenu = () => setMenu((p) => !p);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
        <select
          onChange={changeLanguage}
          value={i18n.language}
          className="px-2 py-1 border rounded"
        >
          <option value="en">🇬🇧 English</option>
          <option value="ru">🇷🇺 Русский</option>
          <option value="uz">🇺🇿 Uzbek</option>
        </select>
      </div>

      <div className="navbar_child-3">
        <i className="fa-solid fa-bars" onClick={handleMenu}></i>
      </div>
    </div>
  );
}
