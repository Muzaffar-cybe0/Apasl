import { useEffect, useRef, useState } from "react";
import "../sass/navbar.scss";
import "../css/hamburgers.min.css";
import Logo from "../assets/Logo.png";
import EnglishFlag from "../assets/en_flag.jpg";
import RussianFlag from "../assets/ru_flag.jpg";
import UzbekFlag from "../assets/uz_flag.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DocumentViewer from "./DocumentViewer";
import scheduleDoc from "../data/schedule/schedule.docx";
import axios from "axios";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const scrollListenerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showDocumentViewer, setShowDocumentViewer] = useState(false);
  const [scheduleFile, setScheduleFile] = useState(null);
  const [scheduleType, setScheduleType] = useState("docx");

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

  // Schedule fayllarni backenddan olish
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        // Til bo'yicha schedule ro'yxatini olish
        const response = await axios.get(
          `https://apasl1.pythonanywhere.com/api/schedule/schedules_list_${i18n.language}/`,
          { headers: { "Accept-Language": i18n.language } }
        );

        if (response?.data?.results?.length > 0) {
          // Birinchi schedule faylini olish
          const schedule = response.data.results[0];

          // Schedule detalni olish
          const detailResponse = await axios.get(
            `https://apasl1.pythonanywhere.com/api/schedule/schedules_detail_${i18n.language}/${schedule.uid}/`
          );

          if (detailResponse?.data?.file) {
            setScheduleFile(detailResponse.data.file);
            // Fayl turini aniqlash
            setScheduleType(
              detailResponse.data.file.endsWith(".pdf") ? "pdf" : "docx"
            );
          } else {
            // Agar backend'da fayl bo'lmasa local faylni ishlatamiz
            setScheduleFile(scheduleDoc);
            setScheduleType("docx");
          }
        } else {
          // Ro'yxat bo'sh bo'lsa local faylni ishlatamiz
          setScheduleFile(scheduleDoc);
          setScheduleType("docx");
        }
      } catch (error) {
        console.error("Schedule faylni yuklashda xatolik:", error);
        // Xatolik bo'lsa ham local faylni ishlatamiz
        setScheduleFile(scheduleDoc);
        setScheduleType("docx");
      }
    };

    fetchSchedule();
  }, [i18n.language]);

  const handleMenu = () => setMenu((p) => !p);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const languageFlag =
    i18n.language === "en"
      ? EnglishFlag
      : i18n.language === "ru"
      ? RussianFlag
      : UzbekFlag;

  // Schedule tugmasi uchun handler
  const handleScheduleClick = () => {
    setShowDocumentViewer(true);
  };

  return (
    <>
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
          <button onClick={() => scrollToSection("about")}>
            {t("navBtn3")}
          </button>
          <button onClick={() => scrollToSection("speakers")}>
            {t("navBtn4")}
          </button>
          <button onClick={() => scrollToSection("organizers")}>
            {t("navBtn5")}
          </button>
          <button onClick={handleScheduleClick}>{t("navBtn6")}</button>
          <Link
            to="https://drive.google.com/drive/folders/17cavm51xH1_b1T4peaqxZo_2Hh0gqCmp?usp=drive_link"
            target="_blank"
          >
            Presentations
          </Link>
          <Link to="/account/login">{t("navBtn7")}</Link>
        </div>
        <div className="navbar_wrapper-3">
          <div className={`language-dropdown ${isOpen ? "open" : ""}`}>
            <div
              className="selected-language"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src={languageFlag}
                alt={i18n.language || "en"} // Ensure default to English
                className="flag-img"
              />
              <span style={{ color: "#ecf9fc" }}>
                {i18n.language?.toUpperCase() || "EN"}
              </span>{" "}
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
          <div className="navbar_wrapper-3_child-2">
            <i className="fa-solid fa-bars" onClick={handleMenu}></i>
          </div>
        </div>
      </div>

      <DocumentViewer
        isOpen={showDocumentViewer}
        onClose={() => setShowDocumentViewer(false)}
        fileUrl={scheduleFile}
        fileType={scheduleType}
        title={t("schedule")}
      />
    </>
  );
}
