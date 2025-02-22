import "../sass/home.scss";
import Banner from '../components/Banner'
import Associates from '../components/Associates'
import EventOutComes from '../components/EventOutComes'
import { Outlet } from "react-router";
import Ticket from "../components/Ticket";
// import Schedules from "../components/Schedules";
import WelcomeSpeech from "../components/WelcomeSpeech";
import MeetTheKeyOrganizers from "../components/MeetTheKeyOrganizers";
import { useEffect, useState } from "react";
import axios from 'axios';
export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://apasl1.pythonanywhere.com/api/speaker/speakers_list/');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  
  return (
    <div className="home" id="home">
      <Banner />
      <Associates />
      <WelcomeSpeech />
      <EventOutComes />
      <MeetTheKeyOrganizers/>
      <Outlet/>
      <Ticket/>
      <h1 style={{textAlign:"center"}}>The Program is under Development...</h1>
      {/* <Schedules/> */}
      
    </div>
  );
}
