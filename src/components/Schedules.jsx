import { useEffect, useState } from "react";
import "animate.css";
import "../sass/schedules.scss";
import dataJson from "../data/data"; // Ensure this path is correct
import { useTranslation } from "react-i18next";

export default function Schedules() {
  const [currentTab, setCurrentTab] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleTabChange = (index) => {
    setCurrentTab(index);
  };

  useEffect(() => {
    setSchedules(dataJson.schedules);

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
          {schedules && schedules.length > 0 ? (
            schedules.map((schedule, index) => (
              <div
                key={index}
                className={`tab ${currentTab === index ? "active" : ""}`}
                onClick={() => handleTabChange(index)}
              >
                {schedule.date
                  ? schedule.date[language] || schedule.date.en
                  : ""}
              </div>
            ))
          ) : (
            <div>No schedules available</div>
          )}
        </div>

        {schedules && schedules.length > 0 ? (
          schedules.map((schedule, index) => (
            <div
              key={index}
              className="tab-content"
              style={{ display: currentTab === index ? "block" : "none" }}
            >
              {schedule.events && schedule.events.length > 0 ? (
                schedule.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="event">
                      {event.time && <div className="time">{event.time}</div>}
                    <div className="event-header">
                    

                      <div className="title">
                        {typeof event.title === "string"
                          ? event.title
                          : event.title
                          ? event.title[language] || event.title.en
                          : ""}
                      </div>

                      {event.speakers && event.speakers.length > 0 && (
                      <div className="speakers">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <div key={speakerIndex} className="speaker">
                            <strong>
                              {typeof speaker.name === "string"
                                ? speaker.name
                                : speaker.name
                                ? speaker.name[language] || speaker.name.en
                                : ""}
                            </strong>
                          </div>
                        ))}
                      </div>
                    )}

                    {event.speaker && (
                      <div className="speaker">
                        <strong style={{ color: "#e60013" }}>
                          {typeof event.speaker === "string"
                            ? event.speaker
                            : event.speaker[language] || event.speaker.en}
                        </strong>
                      </div>
                    )}
                    </div>

                    
                  </div>
                ))
              ) : (
                <div>No events available</div>
              )}
            </div>
          ))
        ) : (
          <div>No schedules available</div>
        )}
      </div>
    </div>
  );
}
