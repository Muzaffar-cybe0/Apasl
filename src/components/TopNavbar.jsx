import React from "react";
import '../Sass/topNav.scss';
import Logo from "../assets/logo.png";
import Telphone_icon from "../assets/telephone_svg1.svg";
import Watch_icon from "../assets/watch_svg2.svg";
import Location_icon from "../assets/location_svg3.svg";
export default function TopNavbar() {
  return (
    <div className="top_nav_container">
      <div className="top_nav_container_child-1">
        <img src={Logo} alt="logo" />
      </div>
      <div className="top_nav_container_child-2">
        <div className="telephone_icon">
          <img src={Telphone_icon} alt="icon" />
          <div>
            <p>emergency</p>
            <p>(237) 681-812-255</p>
          </div>
        </div>
        <div className="watch_icon">
          <img src={Watch_icon} alt="icon" />
          <div>
            <p>work hour</p>
            <p>09:00 - 20:00 Everyday</p>
          </div>
        </div>
        <div className="location_icon">
          <img src={Location_icon} alt="icon" />
          <div>
            <p>emergency</p>
            <p>0123 Some place</p>
          </div>
        </div>
      </div>
    </div>
  );
}
