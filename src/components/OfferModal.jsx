import { useState, useEffect } from "react";
import "../sass/offermodal.scss";
import { cookies } from "../data/cookes";

// eslint-disable-next-line react/prop-types
export default function OfferModal({ onClose }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
            O`qib chiqdim
            <input
              type="checkbox"
              disabled={!isScrolled}
              onChange={() => setIsChecked(!isChecked)}
            />
          </label>
          <button disabled={!isChecked} onClick={onClose}>
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
}
