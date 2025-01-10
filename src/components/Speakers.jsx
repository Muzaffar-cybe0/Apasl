import "../sass/speakers.scss";
import "animate.css";
import dataJson from "../data/speakersData.json"
import CirclePlus from "../assets/circle_plus.svg";
// import {useState } from "react";
import { Link } from "react-router-dom";

export default function Speakers() {
  // const [data, setData] = useState([]);
  
  return (
    <div className="speakers" id="speakers">
      <div
        className={`speakers_OlderCh-1`}
      >
        <p>listen to the</p>
        <h1>event speakers</h1>
      </div>

      <div className="speakers_OlderCh-2">
        {dataJson.information.map((item) => {
          const modalId = `speakerModal-${item.id}`;
          return (
            <div
              className={`speakers_OlderCh-2_child`}
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
