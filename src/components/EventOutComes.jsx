import "../sass/eventOutcomes.scss";
import { useEffect, useRef, useState } from "react";
import "animate.css";

import Icon1 from "../assets/1_icon.png";
import Icon2 from "../assets/2_icon.png";
import Icon3 from "../assets/3_icon.png";
export default function EventOutComes() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Advancement in Hepatitis Research and Treatment",
      about:
        "APASL 2025 will foster collaboration among global experts to present groundbreaking research and innovative therapies, particularly focusing on the elimination of viral hepatitis and advancements in liver transplantation.",
      image: Icon1,
    },
    {
      id: 2,
      title: "Knowledge Exchange and Capacity Building",
      about:
        "The conference will provide a platform for sharing best practices, clinical guidelines, and case studies, enhancing the expertise of healthcare professionals, with a focus on emerging challenges in hepatology across Central Asia.",
      image: Icon2,
      delay: "1",
    },
    {
      id: 3,
      title: "Strengthening Regional and Global Partnerships",
      about:
        "APASL 2025 will facilitate international cooperation, encouraging strategic partnerships between researchers, clinicians, and policymakers to develop actionable frameworks for combating liver diseases worldwide.",
      image: Icon3,
      delay: "2",
    },
  ]);
  

  return (
    <div className="eventOutComes" id="about">
      <div
        className={`eventOutComes_OlderCh-1 `}
      >
        <p>why join us</p>
        <h1>event outcomes</h1>
      </div>
      
      <div className="eventOutComes_OlderCh-2">
        {data.map((item) => {
          return (
            <div
              className={`eventOutComes_OlderCh-2_child-${item.id}
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
