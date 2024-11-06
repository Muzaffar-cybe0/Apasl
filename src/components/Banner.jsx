import AOS from "aos";
import "aos/dist/aos.css";
import CalendarIcon from "../assets/calendar_icon_svg.svg";
import TeamIcon from "../assets/team_icon_svg.svg";
import CashIcon from "../assets/cash_icon_svg.svg";
import "../Sass/banner.scss";
import { useEffect } from "react";
export default function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="banner_container">
      <div className="banner_OlderChild-1">
        <p>Caring for life</p>
        <h1>Leading the Way in Medical Excellence</h1>
        <button type="button">Our Services</button>
      </div>

      <div className="banner_OlderChild-2">
        <div
          className="banner_OlderChild-2_child-1"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <p>Book an appointment</p>
          <img src={CalendarIcon} alt="svg_icon" />
        </div>

        <div
          className="banner_OlderChild-2_child-2"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="950"
        >
          <p>Book an appointment</p>
          <img src={TeamIcon} alt="svg_icon" />
        </div>

        <div
          className="banner_OlderChild-2_child-3"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1300"
        >
          <p>Book an appointment</p>
          <img src={CashIcon} alt="svg_icon" />
        </div>
      </div>
    </div>
  );
}
