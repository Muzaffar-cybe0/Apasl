import  "../home_Sass/ourservices.scss";
import { NavLink, Outlet } from "react-router-dom";
import CheckUp from "../assets/CheckUp.svg";
import Cardiogram from "../assets/Cardiogram.svg";
import Dna from "../assets/Dna.svg";
import Blood_Bank from "../assets/Blood_Bank.svg";
export default function OurServices() {
  return (
    <div className="ourServices">
      
      <div className="ourServices_OlderChild-1">
        <NavLink to="checkUp">
          <img src={CheckUp} alt="icon" />
        </NavLink>
        <NavLink to="cardiogram">
          <img src={Cardiogram} alt="icon" />
        </NavLink>
        <NavLink to="dna">
          <img src={Dna} alt="icon" />
        </NavLink>
        <NavLink to="bloodBank">
          <img src={Blood_Bank} alt="icon" />
        </NavLink>
        <NavLink to="services">
          View All
        </NavLink>
      </div>

      <div className="ourServices_OlderChild-2">
        <Outlet />
      </div>
    </div>
  );
}
