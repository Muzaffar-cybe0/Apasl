import { useState, useEffect } from "react";
import "../sass/footer.scss";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [data, setData] = useState(null);
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apasl1.pythonanywhere.com/api/speaker/speakers_list/"
        );
        const json = await response.json();
        console.log("Fetched Data:", json);
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column1">
            <ul>
              <li>
               
                <button onClick={() => scrollToSection("sponsors")}>
                  {t("navBtn2")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sponsors")}>
                  {t("navBtn3")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sponsors")}>
                  {t("navBtn4")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sponsors")}>
                  {t("navBtn5")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("sponsors")}>
                  {t("navBtn6")}
                </button>
              </li>
            </ul>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/share/1BCVimofdi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="footer-column2">
            <div className="subscription">
              <a href="mailto:info@gmail.com">Send @gmail</a>
            </div>
            <div className="footer-bottom">
              <p>© 2024 Exhibz. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
