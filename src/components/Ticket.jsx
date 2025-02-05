import "../sass/ticket.scss";
import "animate.css";
import { Box, Grid, Typography, Button } from "@mui/material";
export default function Ticket() {
  const cardData = [
    {
      id: 1,
      title: "EARLY BIRD",
      price: "$250",
      bgColor: "#fff5e6", // light orange background
    }
  ];


  return (
    <div className="ticket">
      <div
        className={`ticket_wrapper1`}
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
                height={{ lg: "70vh" }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "40px",
                    height: "100%",
                    width: "100%",
                    maxWidth: "100%",
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

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      width:"60%",
                      padding:"10px",
                      backgroundColor: "#000",
                      color: "#fff",
                      fontSize:"16px",
                      "&:hover": {
                        backgroundColor: "#333",
                      },
                    }}
                  >
                    BUY TICKET
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}
