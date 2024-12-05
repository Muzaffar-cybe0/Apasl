import "../sass/home.scss";
import Banner from '../components/Banner'
import Associates from '../components/Associates'
import EventOutComes from '../components/EventOutComes'
import { Outlet } from "react-router";
import Ticket from "../components/Ticket";
import Footer from "../components/Footer";
import EventGallery from "../components/EventGallery";
import LatestNews from "../components/LatestNews";
import Schedules from "../components/Schedules";
export default function Home() {
  return (
    <div className="home" id="home">
      <Banner />
      <Associates />
      <EventOutComes />
      <Outlet/>
      <Ticket/>
      <LatestNews/>
      <EventGallery/>
      <Schedules/>
      
    </div>
  );
}
