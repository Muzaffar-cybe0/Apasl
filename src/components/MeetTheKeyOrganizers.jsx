import "animate.css";
import "../sass/meetTheKeyOrganizers.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import CirclePlus from "../assets/circle_plus.svg";
import Logo from "../assets/Logo.png";
import { useTranslation } from "react-i18next";

export default function MeetTheKeyOrganizers() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [organizersData, setOrganizersData] = useState([]);

  useEffect(() => {
    const fetchOrganizers = async () => {
      try {
        const response = await axios.get(
          "https://apasl1.pythonanywhere.com/api/organiser/organiser_list/"
        );
        if (response?.data) {
          setOrganizersData(response.data.results);
        } else {
          setOrganizersData([]);
        }
      } catch (error) {
        console.error("Error fetching organizers:", error);
        setOrganizersData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrganizers();
  }, []);

  const handleOpenModal = (id) => {
    setActiveModal(id);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="meetTheKeyOrganizers" id="organizers">
      <div className="meetTheKeyOrganizers_child-1">
        <h1>{t("meetTheKeyOrganizers1")}</h1>
      </div>

      <div className="meetTheKeyOrganizers_child-2">
        {loading ? (
          <div className="organizers_skeleton_container">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div className="organizers_skeleton_item" key={idx}>
                <div className="organizers_skeleton_img"></div>
                <div className="organizers_skeleton_text">
                  <div className="organizers_skeleton_title"></div>
                  <div className="organizers_skeleton_role"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          organizersData.map((item) => (
            <div className="meetTheKeyOrganizers_child-2_child" key={item.uid}>
              <div className="meetTheKeyOrganizers_child-2_child_speakerImg-1">
                {item?.image ? (
                  <img src={item.image} alt="organizer" />
                ) : (
                  <img src={Logo} alt="organizer" />
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

              <div className="meetTheKeyOrganizers_child-2_child_speakerName-2">
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
            {organizersData
              .filter((item) => item.uid === activeModal)
              .map((item) => (
                <div key={item.uid} className="modalContent-child">
                  {item?.image ? (
                    <img src={item.image} alt="organizer" />
                  ) : (
                    <img src={Logo} alt="organizer" />
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
