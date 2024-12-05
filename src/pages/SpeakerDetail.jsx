import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "../sass/speakerDetails.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import BreadCrumbs from "../components/BreadCrumbs";

export default function SpeakerDetail() {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const [speakers, setSpeakers] = useState([]);
  const [speaker, setSpeaker] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:3000/information") 
      .then((res) => res.json())
      .then((json) => {
        setSpeakers(json);
        const currentSpeaker = json.find((speaker) => speaker.id === itemId);
        setSpeaker(currentSpeaker); 
      })
      .catch((err) => console.error("Failed to fetch speakers data:", err));
  }, [itemId]);

  const handlePrev = () => {
    const currentIndex = speakers.findIndex((speaker) => speaker.id === itemId);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + speakers.length) % speakers.length;
      const item = speakers[prevIndex];
      setSpeaker(item);
      navigate(`/home/speaker/${item.id}`);
    }
  };

  const handleNext = () => {
    const currentIndex = speakers.findIndex((speaker) => speaker.id === itemId);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % speakers.length;
      const item = speakers[nextIndex];
      setSpeaker(item);
      navigate(`/home/speaker/${item.id}`); // Updated path
    }
  };

 

  if (!speaker) {
    return <div>Loading...</div>;
  }

  return (
    <div className="speakerDetails">
      <div className="speakerDetails_wrapper1">
        <h1>{speaker.name}</h1>
        <BreadCrumbs/>
      </div>

      <div
        className="speakerDetails_wrapper2"
        
      >
        <div className="speakerDetails_wrapper2_child-1">
          <div
            className="speakerDetails_wrapper2_child-1_card-border-top"
           
          ></div>
          <div className="speakerDetails_wrapper2_child-1_img">
            <img src={speaker.image} alt={speaker.name} />
          </div>
          <span>{speaker.name}</span>
          <p className="speakerDetails_wrapper2_child-1_job">
            {speaker.aboutSelf}
          </p>
        </div>

        <div className="speakerDetails_wrapper2_child-2">
          <Swiper
            slidesPerView={1}
            
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           
            className="mySwiper"
          >
            <SwiperSlide className="SpeakerD_childSlider">
              <div className="SpeakerD_childSlider_brother_1">
                <p>{speaker.workTime1}</p>
              </div>
              <div className="SpeakerD_childSlider_brother_2">
                <div>
                  <p>{speaker.plannedDate1}</p>
                  <h1>{speaker.speakingTitle}</h1>
                </div>
                <p>{speaker.speakingAbout}</p>
              </div>
            </SwiperSlide>

            <SwiperSlide className="SpeakerD_childSlider">
              <div className="SpeakerD_childSlider_brother_1">
                <p>{speaker.workTime2}</p>
              </div>
              <div className="SpeakerD_childSlider_brother_2">
                <div>
                  <p>{speaker.plannedDate2}</p>
                  <h1>{speaker.speakingTitle}</h1>
                </div>
                <p>{speaker.speakingAbout}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="SpeakerD_childSlider">
              <div className="SpeakerD_childSlider_brother_1">
                <p>{speaker.workTime3}</p>
              </div>
              <div className="SpeakerD_childSlider_brother_2">
                <div>
                  <p>{speaker.plannedDate3}</p>
                  <h1>{speaker.speakingTitle}</h1>
                </div>
                <p>{speaker.speakingAbout}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>

      <div className="speakerDetails_wrapper3">
        <button onClick={handlePrev}>
          <i className="fa-solid fa-arrow-left-long"></i>
          <p>Previous speaker</p>
          </button>
        <button onClick={handleNext}>
          <p>Next speaker</p>
         <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
}
