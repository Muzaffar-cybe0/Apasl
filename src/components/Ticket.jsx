import React from "react";
import "../sass/ticket.scss";
import { useTranslation } from "react-i18next";

export default function Ticket() {
  const { t } = useTranslation();

  const cardData = [
    {
      id: 1,
      title: "EARLY BIRD",
      price: "$250",
      bgColor: "#fff5e6",
    },
  ];

  return (
    <div className="ticket">
      
      <div className="ticket_wrapper1">
        <p>{t("ticket1")}</p>
        <h1>{t("ticket2")}</h1>
      </div>

      <div className="card_wrapper2">
        <div className="grid-container">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="card"
              style={{ backgroundColor: card.bgColor }}
            >
              <h2>{card.title}</h2>
              <p className="price">{card.price}</p>
              <button className="btn">{t("ticket3")}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
