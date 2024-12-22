import { useEffect, useRef, useState } from "react";
import "../sass/ticket.scss";
import "animate.css";
import { Box, Grid, Typography, Button } from "@mui/material";
export default function Ticket() {
  const cardData = [
    {
      id: 1,
      title: "EARLY BIRD",
      price: "$219",
      sold: 500,
      total: 500,
      bgColor: "#fff5e6", // light orange background
    },
    {
      id: 2,
      title: "REGULAR",
      price: "$399",
      sold: 350,
      total: 500,
      bgColor: "#ff0000", // red background
      textColor: "#ffffff", // white text
    },
    {
      id: 3,
      title: "PLATINUM",
      price: "$699",
      sold: 250,
      total: 500,
      bgColor: "#e6f7ff", // light blue background
    },
  ];

  const [animate, setAnimate] = useState(false);

  const scrollTicketRef = useRef(null);

  useEffect(() => {
    scrollTicketRef.current = () => {
      if (window.scrollY > 1880) {
        setAnimate(true);
      }
    };
    window.addEventListener("scroll", scrollTicketRef.current);

    return () => {
      window.removeEventListener("scroll", scrollTicketRef.current);
    };
  }, []);

  return (
    <div className="ticket">
      <div
        className={`ticket_wrapper1 ${
          animate ? "animate__animated animate__backInLeft" : ""
        }`}
      >
        <p>pricing plans</p>
        <h1>get your ticket</h1>
      </div>

      <div className="card_wrapper2">
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            {cardData.map((card) => (
              <Grid
                key={card.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                opacity={0}
                height={{lg:"70vh"}}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                className={`${animate ? "animate__animated animate__backInUp": ""} `}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection:"column",
                    gap:"15px",
                    height: "100%",
                    width: "100%",
                    maxWidth:"100%",
                    p: 3,
                    backgroundColor: card.bgColor,
                    borderRadius: 2,
                    boxShadow: 3,
                    textAlign: "center",
                    color: card.textColor || "inherit",
                  }}
                >
                  <Typography variant="h4" fontWeight="bold">
                    {card.title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ mt: 1, mb: 2 }}
                  >
                    {card.price}
                  </Typography>

                  <Box
                    sx={{
                      height: 12,
                      width: "100%",
                      background: "linear-gradient(to right, #1e1e1e, #ffffff)", // Correct gradient
                      mb: 1,
                      borderRadius: 2,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: `${(card.sold / card.total) * 100}%`,
                        backgroundColor: "#1e1e1e",
                        borderRadius: 2,
                      }}
                    ></Box>

                  </Box>

                  <Typography variant="body1" fontWeight="bold" sx={{ mb: 2 }}>
                    {`${card.sold}/${card.total}`}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Enter Promotional Code
                  </Typography>

                  <Button
                  size="large"
                    variant="contained"
                    color="primary"
                    padding="10px"
                    sx={{
                      backgroundColor: "#000",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    BUY TICKET
                  </Button>

                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ mt: 2, fontSize: "0.75rem" }}
                  >
                    All prices exclude 25% VAT
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
