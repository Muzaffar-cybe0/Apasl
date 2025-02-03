import "animate.css";
import "../sass/meetTheKeyOrganizers.scss";
import dataJson from "../data/speakersData.json";
import CirclePlus from "../assets/circle_plus.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function MeetTheKeyOrganizers() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (id) => {
    setActiveModal(id);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };
  return (
    <div className="meetTheKeyOrganizers" id="organizers">
      <div className="meetTheKeyOrganizers_child-1">
        <h1>Meet The Key Organizers</h1>
      </div>

      <div className="meetTheKeyOrganizers_child-2">
        {dataJson.organizers.map((item) => {
          return (
            <div className={`meetTheKeyOrganizers_child-2_child`} key={item.id}>
              <div className={`meetTheKeyOrganizers_child-2_child_speakerImg-1`}>
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

              <div className={`meetTheKeyOrganizers_child-2_child_speakerName-2`}>
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

            {dataJson.organizers
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
                    {item?.aboutSelf && <p>{item?.aboutSelf}</p>}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
