import { useEffect, useState } from "react";

import { Tabs, Tab, Box, Typography } from "@mui/material";
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

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
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
      <div className={`schedules-child1 `}>
        <p>{t("schedules1")}</p>
        <h1>{t("schedules2")}</h1>
      </div>
      <div className={`schedules-child2 `}>
        <Box
          sx={{
            width: "95%",
            maxWidth: "100%",
            bgcolor: "#1e1e1e",
            color: "#fff",
            p: { xs: 2, md: 3 },
            borderRadius: "10px",
            margin: "auto",
          }}
        >
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="inherit"
            TabIndicatorProps={{
              style: { backgroundColor: "#e60013", height: "4px" },
            }}
          >
            {dataJson.schedules.map((schedule, index) => (
              <Tab
                key={index}
                label={
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                      {typeof schedule.date === "string"
                        ? schedule.date
                        : schedule.date[language]}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </Tabs>

          {dataJson.schedules.map((schedule, index) => (
            <Box
              key={index}
              hidden={currentTab !== index}
              sx={{
                bgcolor: "#1e1e1e",
                p: 2,
              }}
            >
              {schedule.events.map((event, eventIndex) => (
                <Box
                  key={eventIndex}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      md: "column",
                      lg: "row",
                      xl: "row",
                    },
                    alignItems: {
                      xs: "flex-start",
                      md: "flex-start",
                      lg: "center",
                      xl: "center",
                    },
                    justifyContent: "space-between",
                    borderBottom: "0.20px solid #707070",
                    py: 2,
                    gap: 2,
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                      {typeof event.time === "string"
                        ? event.time
                        : event.time[language]}
                    </Typography>
                  </Box>

                

                  <Box sx={{ flex: 3, ml: { xs: 0, md: 2 } }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                    >
                      {typeof event.title === "string"
                        ? event.title
                        : event.title[language]}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
}
