import "../sass/home.scss";
import Banner from '../components/Banner'
import Associates from '../components/Associates'
import EventOutComes from '../components/EventOutComes'
import { Outlet } from "react-router";
import Ticket from "../components/Ticket";
import Schedules from "../components/Schedules";
import WelcomeSpeech from "../components/WelcomeSpeech";

export default function Home() {
  return (
    <div className="home" id="home">
      <Banner />
      <Associates />
      <WelcomeSpeech />
      <EventOutComes />
      <Outlet/>
      <Ticket/>
     
      <Schedules/>
      
    </div>
  );
}
