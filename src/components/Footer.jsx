import "../sass/footer.scss";
import { useTranslation } from "react-i18next";
import humo from "../assets/humo-logo.png";
import uzcard from "../assets/uzcard.png";
import visa from "../assets/visa.png";
import { useState } from "react";
import OfferModal from "./OfferModal";

export default function Footer() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
          <div className="paymant">
            <div className="paymant_logo">
              <img src={humo} alt="" />
              <img src={uzcard} alt="" />
              <img src={visa} alt="" />
            </div>
          </div>
          <div className="footer-column2">
            <div className="subscription">
              <a href="mailto:info@gmail.com">Send @gmail</a>
            </div>
            <button onClick={() => setIsModalOpen(true)}>
              {t("publicoffer")}
            </button>
            <div className="footer-bottom">
              <p>© 2024 Exhibz. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <OfferModal onClose={() => setIsModalOpen(false)} />}
    </footer>
  );
}
