import { useEffect, useRef, useState } from "react";
import "../sass/ticket.scss";
import "animate.css";

export default function Ticket() {
  const [ticket, setTicket] = useState([
    {
      id: 1,
      title: "early bird",
      price: "219",
      percent: "500/500",
    },
    {
      id: 2,
      title: "regular",
      price: "399",
      percent: "350/500",
    },
    {
      id: 3,
      title: "platinum",
      price: "699",
      percent: "250/500",
    },
  ]);
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
    <div className="ticket" >
      <div className={`ticket_wrapper1 ${animate ? "animate__animated animate__backInLeft" : ""}`}>
        <p>pricing plans</p>
        <h1>get your ticket</h1>
      </div>

      <div className="card_wrapper2">
        {ticket.map((value) => {
          return (
            <div
              className={`card card${value.id} ${
                animate ? "animate__animated animate__backInUp" : ""
              }`}
             
              key={value.id}
            >
              <p className="ticket_title">{value.title}</p>

              <h1 className="ticket_price">$ {value.price}</h1>

              <div className="ticket_percent">
                <div className="ticket_percent_child1"></div>

                <div className="ticket_percent_child2">
                  <p>{value.percent}</p>
                </div>
              </div>

              <p className="ticket_pro_code">Enter Promotional Code</p>
              <button type="button" className="ticket_buy_ticketBtn">
                <p>buy ticket</p>
              </button>
              <p className="ticket_percent_exclude">
                All prices exclude 25% VAT
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
}
