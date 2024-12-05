import "../sass/eventOutcomes.scss";
import { useEffect, useRef, useState } from "react";
import "animate.css";

import Icon1 from "../assets/microphone_icon.svg";
import Icon2 from "../assets/users_icon.svg";
import Icon3 from "../assets/news_icon.svg";
export default function EventOutComes() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Great Speakers",
      about:
        "How you transform your business as technology, consumer, habits industry dynamic",
      image: Icon1,
    },
    {
      id: 2,
      title: "New People",
      about:
        "How you transform your business as technology, consumer, habits industry dynamic",
      image: Icon2,
      delay: "1",
    },
    {
      id: 3,
      title: "Have Fun",
      about:
        "How you transform your business as technology, consumer, habits industry dynamic",
      image: Icon3,
      delay: "2",
    },
  ]);
  const [animate, setAnimate] = useState(false);
  const scrollEventOutRef = useRef(null);
  useEffect(() => {
    scrollEventOutRef.current = () => {
      if (window.scrollY > 650) {
        setAnimate(true);
      }
    };
    window.addEventListener("scroll", scrollEventOutRef.current);

    return () => {
      window.removeEventListener("scroll", scrollEventOutRef.current);
    };
  }, []);

  return (
    <div className="eventOutComes" id="about">
      <div
        className={`eventOutComes_OlderCh-1  ${
          animate
            ? `animate__animated animate__backInLeft
                `
            : ""
        }`}
      >
        <p>why join us</p>
        <h1>event outcomes</h1>
      </div>
      <div className="eventOutComes_OlderCh-2">
        {data.map((item) => {
          return (
            <div
              className={`eventOutComes_OlderCh-2_child-${item.id}
            ${
              animate
                ? `animate__animated animate__rollIn 
                `
                : ""
            }
            `}
              key={item.id}
            >
              <img src={item.image} alt="icon" />
              <h1>{item.title}</h1>
              <p>{item.about}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
