import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Box, Typography, Avatar } from "@mui/material";
import "animate.css";
import "../sass/schedules.scss";
import dataJson from '../data/speakersData.json'

export default function Schedules() {
  const [currentTab, setCurrentTab] = useState(0);
  const [schedules, setSchedules] = useState([]);
  

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
  }, []);

  return (
    <div className="schedules" id="schedules">
      <div
        className={`schedules-child1 `}
      >
        <p>schedule details</p>
        <h1>schedule</h1>
      </div>
      <div
        className={`schedules-child2 `}
      >
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
                      {schedule.date}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#aaa",
                      }}
                    >
                      {schedule.day}
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
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#aaa",
                      }}
                    >
                      {event.time}
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", color: "#fff" }}>
                      {event.type}
                    </Typography>
                  </Box>

                  <Link to={"/home/authorblogs"}>
                    <Avatar
                      src={event.avatar}
                      alt={event.speaker}
                      sx={{
                        width: {
                          xs: "80px",
                          md: "80px",
                          lg: "90px",
                          xl: "100px",
                        },
                        height: {
                          xs: "80px",
                          md: "80px",
                          lg: "90px",
                          xl: "100px",
                        },
                      }}
                    />
                  </Link>

                  <Box sx={{ flex: 3, ml: { xs: 0, md: 2 } }}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#aaa",
                      }}
                    >
                      {event.speaker}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#aaa",
                      }}
                    >
                      {event.description}
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
