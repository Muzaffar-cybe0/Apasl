import "../sass/speakers.scss";
import "animate.css";
import dataJson from "../data/speakersData.json"
import CirclePlus from "../assets/circle_plus.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Speakers() {
  const [data, setData] = useState([]);
  const [animate, setAnimate] = useState(false);
  const scrollSpeakerRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/information")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => console.error("Failed to fetch speakers data:", err));


      scrollSpeakerRef.current = () => {
        if (window.scrollY > 1150) {
          setAnimate(true);
        } 
      };
      window.addEventListener("scroll", scrollSpeakerRef.current);
  
      return () => {
        window.removeEventListener("scroll", scrollSpeakerRef.current);
      };
  }, []);
  return (
    <div className="speakers" id="speakers">
      <div
        className={`speakers_OlderCh-1 ${
          animate ? "animate__animated animate__backInRight" : ""
        }`}
      >
        <p>listen to the</p>
        <h1>event speakers</h1>
      </div>

      <div className="speakers_OlderCh-2">
        {dataJson.information.map((item) => {
          const modalId = `speakerModal-${item.id}`;
          return (
            <div
              className={`speakers_OlderCh-2_child ${
                animate ? "animate__animated animate__backInUp" : ""
              }`}
              key={item.id}
            >
              <div className={`speakers_OlderCh-2_child_speakerImg-1`}>
                <img src={item.image} alt="image" />
                <div>
                  <a href={`#${modalId}`} rel="modal:open">
                    <img src={CirclePlus} alt="icon" className="circlePlus" />
                  </a>
                </div>
              </div>

              <div className={`speakers_OlderCh-2_child_speakerName-2`}>
                <Link to={`/home/speaker/${item.id}`}>{item.name}</Link>
                <p>{item.role}</p>
              </div>

              <div id={`${modalId}`} className="modal">
                <div className="modal_child-1">
                  <img src={`${item.image}`} alt="image" />
                  <div className="modal_child-1_child2">
                    <Link
                      to={`/home/speaker/${item.id}`}
                      className="speaker_name"
                    >
                      {item.name}
                    </Link>
                    <p>{item.role}</p>
                    <p>{item.speakingAbout}</p>
                    <div>
                      <a href={`${item.facebook}`} target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href={`${item.twitter}`} target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href={`${item.github}`} target="_blank">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a href={`${item.linkedIn}`} target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                    <a href="#" rel="modal:close">
                      Close
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
