import { useEffect, useState } from "react";
import "animate.css";
import "../sass/schedules.scss";
import dataJson from "../data/speakersData.json"; // Ensure this path is correct
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
                {schedule.date} {/* Assuming date is a string */}
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
              <h3 style={{color:"#ecf9fc"}}>
                {schedule.day ? schedule.day[language] || schedule.day.en : ""}
              </h3>{" "}
             
              {schedule.events && schedule.events.length > 0 ? (
                schedule.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="event">
                    <div className="time">{event.time}</div>
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
                            <strong>{speaker.name}</strong>
                            
                          </div>
                        ))}
                      </div>
                    )}

                    {event.session && (
                      <div className="session">
                        {typeof event.session === "string"
                          ? event.session
                          : event.session
                          ? event.session[language] || event.session.en
                          : ""}
                      </div>
                    )}

                    {event.presentations && event.presentations.length > 0 && (
                      <div className="presentations">
                        {event.presentations.map((presentation, presIndex) => (
                          <div key={presIndex} className="presentation">
                            <div className="presentation-time">
                              {presentation.time}
                            </div>
                            <div className="presentation-title">
                              {typeof presentation.title === "string"
                                ? presentation.title
                                : presentation.title
                                ? presentation.title[language] ||
                                  presentation.title.en
                                : ""}
                            </div>
                            <div className="presentation-speaker">
                              {presentation.speaker}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {event.type === "discussion" && (
                      <div className="discussion">
                        {event.title ? (
                          <div className="discussion-title">
                            {typeof event.title === "string"
                              ? event.title
                              : event.title
                              ? event.title[language] || event.title.en
                              : ""}
                          </div>
                        ) : (
                          <div className="discussion-title">
                            {t("discussion")}
                          </div>
                        )}
                      </div>
                    )}

                    {event.type === "break" && (
                      <div className="break">
                        {event.title
                          ? typeof event.title === "string"
                            ? event.title
                            : event.title
                            ? event.title[language] || event.title.en
                            : ""
                          : t("break")}
                      </div>
                    )}
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
