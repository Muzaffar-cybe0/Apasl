import "../sass/footer.scss";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.facebook.com/share/1BCVimofdi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i> {t("footer1")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/apasl_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i> {t("footer2")}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/APASLnews?lang=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter"></i> {t("footer3")}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <p>{t("footer4")}: info@eventime.com</p>
            <p>{t("footer5")}: +1 123 456 7890</p>
          </div>

          <div className="footer-column">
            <div className="subscription">
              <a href="mailto:someone@example.com">Open @Gmail</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t("footer7")}</p>
        </div>
      </div>
    </footer>
  );
}
