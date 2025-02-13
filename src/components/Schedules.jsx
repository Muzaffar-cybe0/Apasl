import { useEffect, useState } from "react";
import "animate.css";
import "../sass/schedules.scss";
import dataJson from "../data/speakersData.json";
import { useTranslation } from "react-i18next";

export default function Schedules() {
  const [currentTab, setCurrentTab] = useState(0);
  const [schedules, setSchedules] = useState([]);

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  useEffect(() => {
    fetch("http://localhost:3000/schedules")
      .then((res) => res.json())
      .then((json) => {
        setSchedules(json);
      })
      .catch((err) => console.error("Failed to fetch speakers data:", err));

    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className="schedules" id="schedules">

      <div className="schedules-child1">
        <p>{t("schedules1")}</p>
        <h1>{t("schedules2")}</h1>
      </div>
      
      <div className="schedules-child2">
        <div className="tabs">
          {dataJson.schedules.map((schedule, index) => (
            <div
              key={index}
              className={`tab ${currentTab === index ? "active" : ""}`}
              onClick={() => handleTabChange(index)}
            >
              {typeof schedule.date === "string"
                ? schedule.date
                : schedule.date[language]}
            </div>
          ))}
        </div>

        {dataJson.schedules.map((schedule, index) => (
          <div
            key={index}
            className="tab-content"
            style={{ display: currentTab === index ? "block" : "none" }}
          >
            {schedule.events.map((event, eventIndex) => (
              <div key={eventIndex} className="event">
                <div className="time">
                  {typeof event.time === "string"
                    ? event.time
                    : event.time[language]}
                </div>
                <div className="title">
                  {typeof event.title === "string"
                    ? event.title
                    : event.title[language]}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
