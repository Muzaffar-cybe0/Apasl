import React from 'react'
import "../css/Appointment.css"
function Appointment() {
  return (
    <div className='appoint'>
    <div className="container flex">
      <div className='appoint_text'>
      <h2 className='appoint_h2'>Book an Appointment</h2>
      <p className='appoint_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem asperiores exercitationem, numquam blanditiis eum voluptatibus rem inventore quis aperiam temporibus architecto accusantium omnis vitae placeat error nihil fugiat facilis!</p>
      <div className='table'>
        <div className="left_div">
          <input type="text"  placeholder='Name' className='input_name'/>
          <br />
          <input type="text"  placeholder='Email' className='input_name'/>
          <br />
          <input type="text"  placeholder='Date' className='input_name'/>
          <br />
          <input type="text"  placeholder='Doctor' className='input_name'/>
          <br />
        </div>
        <div className="right_div">
        <input type="text"  placeholder='Gender' className='input_name'/>
        <br />
        <input type="text"  placeholder='Phone' className='input_name'/>
        <br />
        <input type="text"  placeholder='Time' className='input_name'/>
        <br />
        <input type="text"  placeholder='Department' className='input_name'/>
        <br />
        </div>
      </div>
        <input type="text"  placeholder='Message' className='message'/>
        <br />
        <button className='submit'>Submit</button>
      </div>




      <div className='hours'>
        <h1 className='hours_h1'>Shedule hours</h1>
        <div className='hours_flex'>
          <h2 className='hours_h2'>Monday</h2>
          <hr  className='hours_hr'/>
          <h3 className='hours_time'>09:00 AM - 07:00 PM</h3>
        </div>
        <div className='hours_flex'>
          <h2 className='hours_h2'>Monday</h2>
          <hr  className='hours_hr'/>
          <h3 className='hours_time'>09:00 AM - 07:00 PM</h3>
        </div>
        <div className='hours_flex'>
          <h2 className='hours_h2'>Monday</h2>
          <hr  className='hours_hr'/>
          <h3 className='hours_time'>09:00 AM - 07:00 PM</h3>
        </div>
        <div className='hours_flex'>
          <h2 className='hours_h2'>Monday</h2>
          <hr  className='hours_hr'/>
          <h3 className='hours_time'>09:00 AM - 07:00 PM</h3>
        </div>
        <div className='hours_flex'>
          <h2 className='hours_h2'>Monday</h2>
          <hr  className='hours_hr'/>
          <h3 className='hours_time'>09:00 AM - 07:00 PM</h3>
        </div>
        <div className='hours_flex'>
          <h2 className='hours_h2'>Monday</h2>
          <hr  className='hours_hr'/>
          <h3 className='hours_time'>09:00 AM - 07:00 PM</h3>
        </div>
        <div className='hours_flex'>
          <h2 className='hours_h2'>Monday</h2>
          <hr  className='hours_hr'/>
          <h3 className='hours_time'>09:00 AM - 07:00 PM</h3>
        </div>
        <div  className='hr'></div>
        <div className='mini_flex'>
        <img className='mini_flex_icon' src={''} alt="" />
        <h3 className='mini_h3'>Emergency <br />
        (237) 681-812-255</h3>
        </div>
      </div>
      
      </div>

      
      <div className="container">

      <iframe 
    className='map'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12092292.33278968!2d56.76326835034783!3d41.57527229280156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3875dc60c71%3A0x85cbb968b56f85a4!2sUzbekistan!5e0!3m2!1sen!2sus!4v1615195792486!5m2!1sen!2sus" 
  width="600" 
  height="450" 
  // style="border:0;" 
  // allowfullscreen="" 
  loading="lazy">
</iframe>
    </div>

  </div>
  )
}

export default Appointment