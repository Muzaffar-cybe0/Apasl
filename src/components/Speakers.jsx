import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CirclePlus from "../assets/circle_plus.svg";
import "../sass/speakers.scss";
import "animate.css";
import Logo from "../assets/Logo.png";
import axios from "axios";
export default function Speakers() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [speakersData, setSpeakersData] = useState([]);
  useEffect(() => {
    const fetchOrganizers = async () => {
      try {
        const response = await axios.get(
          "https://apasl1.pythonanywhere.com/api/speaker/speakers_list/"
        );
        if (response?.data) {
          setSpeakersData(response.data.results);
        } else {
          setSpeakersData([]);
        }
      } catch (error) {
        console.error("Error fetching organizers:", error);
        setSpeakersData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizers();
  }, []);
console.log(speakersData);

  const handleOpenModal = (id) => {
    setActiveModal(id);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="speakers" id="speakers">
      <div className="speakers_OlderCh-1">
        <p>{t("speakers1")}</p>
        <h1>{t("speakers2")}</h1>
      </div>

      <div className="speakers_OlderCh-2">
        {loading ? (
          <div className="speakers_skeleton_container">
            {Array.from({ length: 10 }).map((_, idx) => (
              <div className="speakers_skeleton_item" key={idx}>
                <div className="speakers_skeleton_img"></div>
                <div className="speakers_skeleton_text">
                  <div className="speakers_skeleton_title"></div>
                  <div className="speakers_skeleton_role"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          speakersData.map((item) => (
            <div className="speakers_OlderCh-2_child" key={item.uid}>
              <div className="speakers_OlderCh-2_child_speakerImg-1">
                {item?.image ? (
                  <img src={item.image} alt="speaker" />
                ) : (
                  <img src={Logo} alt="speaker" />
                )}
                <div>
                  <button
                    onClick={() => handleOpenModal(item.uid)}
                    className="circlePlusBtn"
                  >
                    <img src={CirclePlus} alt="icon" className="circlePlus" />
                  </button>
                </div>
              </div>

              <div className="speakers_OlderCh-2_child_speakerName-2">
                <p>{item.name}</p>
                <p>{item.role}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {activeModal && (
        <div className="modalOverlay">
          <div className="modalContent animate__animated animate__slideInDown">
            <button className="closeButton" onClick={handleCloseModal}>
              ✕
            </button>

            {speakersData
              .filter((item) => item.uid === activeModal)
              .map((item) => (
                <div key={item.uid} className="modalContent-child">
                  {item?.image ? (
                    <img src={item.image} alt="speaker" />
                  ) : (
                    <img src={Logo} alt="speaker" />
                  )}
                  <div>
                    <p className="speaker_name">{item.name}</p>
                    <p>{item.role}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
