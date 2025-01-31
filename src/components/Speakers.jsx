import "../sass/speakers.scss";
import "animate.css";
import dataJson from "../data/speakersData.json";
import CirclePlus from "../assets/circle_plus.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Speakers() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (id) => {
    setActiveModal(id);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="speakers" id="speakers">

      <div className={`speakers_OlderCh-1`}>
        <p>listen to the</p>
        <h1>event speakers</h1>
      </div>

      <div className="speakers_OlderCh-2">
        {dataJson.speakers.map((item) => {
          return (
            <div className={`speakers_OlderCh-2_child`} key={item.id}>
              <div className={`speakers_OlderCh-2_child_speakerImg-1`}>
                <img src={item.image} alt="image" />
                <div>
                  <button
                    onClick={() => handleOpenModal(item.id)}
                    className="circlePlusBtn"
                  >
                    <img src={CirclePlus} alt="icon" className="circlePlus" />
                  </button>
                </div>
              </div>

              <div className={`speakers_OlderCh-2_child_speakerName-2`}>
                <Link to={`/home/speaker/${item.id}`}>{item.name}</Link>
                <p>{item.role}</p>
              </div>
            </div>
          );
        })}
      </div>

     
      {activeModal && (
        <div className="modalOverlay">

          <div className="modalContent animate__animated animate__slideInDown">

            <button className="closeButton" onClick={handleCloseModal}>
              ✕
            </button>

            {dataJson.speakers
              .filter((item) => item.id === activeModal)
              .map((item) => (
                <div key={item.id} className="modalContent-child">
                  <img src={`${item.image}`} alt="Speaker" />

                  <div>
                    <Link
                      to={`/home/speaker/${item.id}`}
                      className="speaker_name"
                    >
                      {item.name}
                    </Link>
                    {item?.firstRowABTself && <p>{item?.firstRowABTself}</p>}
                    {item?.secondRowABTself && <p>{item?.secondRowABTself}</p>}
                    {item?.thirdRowABTself && <p>{item?.thirdRowABTself}</p>}
                    {item?.fourthRowABTself && <p>{item?.fourthRowABTself}</p>}
                    {item?.fifthRowABTself && <p>{item?.fifthRowABTself}</p>}
                    {item?.sixthRowABTself && <p>{item?.sixthRowABTself}</p>}
                    {item?.seventhRowABTself && <p>{item?.seventhRowABTself}</p>}
                    {item?.eightthRowABTself && <p>{item?.eightthRowABTself}</p>}
                  </div>

                </div>
              ))}
          </div>
        </div>
      )}

    </div>
  );
}
