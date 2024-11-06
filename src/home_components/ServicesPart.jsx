import '../home_Sass/servicesPart.scss'
import Doctors from '../assets/doctors.svg'
import OurServices from './OurServices'
export default function ServicesPart() {
  return (
    <div className='servicesPart'>
     <div className="servicesPart_Olderchild-1">
          <img src={Doctors} alt="doctors" />
     </div>
     <div className="servicesPart_Olderchild-2">
          <div className="servicesPart_Olderchild-2_child-1">
               <p>care you believe in</p>
               <h1>Our Services</h1>
          </div>
        <OurServices/>
     </div>
    </div>
  )
}
