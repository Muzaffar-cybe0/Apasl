import '../Sass/contact.scss'
import ContactIcon1 from '../assets/contact_icon1.svg'
import ContactIcon2 from '../assets/contact_icon2.svg'
import ContactIcon3 from '../assets/contact_icon3.svg'
import ContactIcon4 from '../assets/contact_icon4.svg'
export default function Contact() {
  return (
    <div className='contact'>
     <div className="contact_child-1">
          <p>get in touch</p>
          <p>contact</p>
     </div>

     <div className="contact_child-2">

          <div className="contact_child-2_div1">
               <img src={ContactIcon1} alt="contact_icon" />
               <div>
                    <h2>emergency</h2>
                    <p>(237) 681-812-255</p>
                    <p>(237) 666-331-894</p>
               </div>
          </div>

          <div className="contact_child-2_div2">
               <img src={ContactIcon2} alt="contact_icon" />
               <div>
                    <h2>location</h2>
                    <p>0123 Some place</p>
                    <p>9876 Some country</p>
               </div>
          </div>

          <div className="contact_child-2_div3">
               <img src={ContactIcon3} alt="contact_icon" />
               <div>
                    <h2>email</h2>
                    <p>fildineeesoe@gmil.com</p>
                    <p>myebstudios@gmail.com</p>
               </div>
          </div>

          <div className="contact_child-2_div4">
               <img src={ContactIcon4} alt="contact_icon" />
               <div>
                    <h2>working hours</h2>
                    <p>Mon-Sat 09:00-20:00</p>
                    <p>Sunday Emergency only</p>
               </div>
          </div>
     </div>
    </div>
  )
}
