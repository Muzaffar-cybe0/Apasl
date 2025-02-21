import "animate.css";
import "../sass/meetTheKeyOrganizers.scss";
import dataJson from "../data/data";
import CirclePlus from "../assets/circle_plus.svg";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
export default function MeetTheKeyOrganizers() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [activeModal, setActiveModal] = useState(null);
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);
  const handleOpenModal = (id) => {
    setActiveModal(id);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };
  return (
    <div className="meetTheKeyOrganizers" id="organizers">
      <div className="meetTheKeyOrganizers_child-1">
        <h1>{t("meetTheKeyOrganizers1")}</h1>
      </div>

      <div className="meetTheKeyOrganizers_child-2">
        {dataJson.organizers.map((item) => {
          return (
            <div className={`meetTheKeyOrganizers_child-2_child`} key={item.id}>
              <div
                className={`meetTheKeyOrganizers_child-2_child_speakerImg-1`}
              >
                <img src={item.image} alt="image" />
                <div>
                  <button
                    onClick={() => handleOpenModal(item.id)}
                    className="circlePlusBtn"
                  >
                    <img src={CirclePlus} alt="icon" className="circlePlus" />
                  </button>
                </div>
              </div>

              <div
                className={`meetTheKeyOrganizers_child-2_child_speakerName-2`}
              >
                <p>
                  {typeof item.name === "string"
                    ? item.name
                    : item.name[language]}
                </p>
                <p>
                  {item.role
                    ? typeof item.role === "string"
                      ? item.role
                      : item.role[language]
                    : null}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {activeModal && (
        <div className="modalOverlay">
          <div className="modalContent animate__animated animate__slideInDown">
            <button className="closeButton" onClick={handleCloseModal}>
              ✕
            </button>

            {dataJson.organizers
              .filter((item) => item.id === activeModal)
              .map((item) => (
                <div key={item.id} className="modalContent-child">
                  <img src={`${item.image}`} alt="Speaker" />

                  <div>
                    <p className="speaker_name">
                      {typeof item.name === "string"
                        ? item.name
                        : item.name[language]}
                    </p>
                    <p>
                      {item.role
                        ? typeof item.role === "string"
                          ? item.role
                          : item.role[language]
                        : null}
                    </p>
                    <p>
                      {typeof item.aboutSelf === "string"
                        ? item.aboutSelf
                        : item.aboutSelf[language]}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
