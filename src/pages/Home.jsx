import '../home_Sass/home.scss'
import Banner from '../components/Banner'
import WelcomePart from '../home_components/WelcomePart'
import ServicesPart from '../home_components/ServicesPart'
import OurSpecialties from '../home_components/OurSpecialties'
import BookAppointment from '../home_components/BookAppointment'
import OurDoctors from '../components/OurDoctors'
import News from '../components/News'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='home'>
     <Banner/>
     <WelcomePart/>
     <ServicesPart/>
     <OurSpecialties/>
     <BookAppointment/>
     <OurDoctors/>
     <News/>
     <Contact/>
     <Footer/>
    </div>
  )
}
