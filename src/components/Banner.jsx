import { useEffect, useState } from "react";
import "../sass/banner.scss";
import Partner1 from "../assets/ministry_associate.png";
import Partner2 from "../assets/virusologiya_associate.png";
import Partner3 from "../assets/ahu_associate.png";
import Partner4 from "../assets/AGHA.png";
const COUNTDOWN_TARGET = new Date("2024-10-31T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};
export default function Banner() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = { ...prevTimeLeft };
        newTimeLeft.seconds -= 1;
        if (newTimeLeft.seconds < 0) {
          newTimeLeft.seconds = 59;
          newTimeLeft.minutes -= 1;
          if (newTimeLeft.minutes < 0) {
            newTimeLeft.minutes = 59;
            newTimeLeft.hours -= 1;
            if (newTimeLeft.hours < 0) {
              newTimeLeft.hours = 23;
              newTimeLeft.days -= 1;
            }
          }
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="banner">
      <div className="banner_wrapper-1">
        <div className="countdown">
          <div className="content">
            {Object.entries(timeLeft).map((el) => {
              const label = el[0];
              const value = el[1];
              return (
                <div className="box" key={label}>
                  <div className="times">
                    <div className="value">
                      <span>{value}</span>
                    </div>
                    <span className="label"> {label} </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="banner_wrapper-1_child-2">
          <h1>Apasl 2025 Tashkent</h1>
          <p>
            International Experience of National Programs for the elimination of
            viral hepatitis
          </p>
          <p>
            Uzbekistan and Azerbaijan Association of Gastroenterology and
            Hepatalogy
            <span>june 4-5, 2025</span>
          </p>
          <button type="button">buy ticket</button>
        </div>
      </div>

      <div className="banner_wrapper-2">
        <div>
          <img src={Partner1} alt="partners" />
          <p>Ministry of Health of the Republican Uzbekistan</p>
        </div>
        <div>
          <img src={Partner2} alt="partners" />
          <p>Research Insitute of Virology of the Republican specialized scientific and practical medical center of the epidemiology, microbiology, infectious and parasitic diseases.</p>
        </div>
        <div>
          <img src={Partner3} alt="partners" />
          <p>Association of hepatologists of uzbekistan</p>
        </div>
        <div>
        <img src={Partner4} alt="partners" />
        <p>Azerbaijan gastroentrology and hepatology association</p>
        </div>
      </div>
    </div>
  );
}
