import { useState, useEffect } from "react";
import "../sass/offermodal.scss";
import { cookies } from "../data/cookes";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
export default function OfferModal({ onClose }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  console.log("hello");

  useEffect(() => {
    const content = document.getElementById("offer-content");
    const handleScroll = () => {
      if (
        content.scrollHeight - content.scrollTop <=
        content.clientHeight + 10
      ) {
        setIsScrolled(true);
      }
    };
    content.addEventListener("scroll", handleScroll);
    return () => content.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div id="offer-content" className="modal-content">
          <p style={{ whiteSpace: "pre-wrap" }}>{cookies.termsOfService}</p>
        </div>
        <div className="modal-footer">
          <label style={{ color: !isScrolled ? "grey" : "black" }}>
            {t("agreement")}
            <input
              type="checkbox"
              disabled={!isScrolled}
              onChange={() => setIsChecked(!isChecked)}
            />
          </label>
          <button disabled={!isChecked} onClick={onClose}>
            {t("close")}
          </button>
        </div>
      </div>
    </div>
  );
}
