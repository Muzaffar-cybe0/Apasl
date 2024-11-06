import React from 'react'
import "../css/Contact.css"
function ContactPage() {
  return (
    <div className='contact'>
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


    {/* <img className='map' src="https://s3-alpha-sig.figma.com/img/4dae/c34d/23fc1e890fdd00ef2f07c7227c085ada?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ox-u1kaO3JYwo2xrJ850ZDr5nJ7mfRkGvH3tEWoS0nwyMjw0aQ1vsBsF1sFdJM3HYMazAGn4sxiPHCYMClEEBH~SmrAxP~TysFxIcpJeSWPDt7eV77yQLamI3HV-ZvEgrJ2znIC7-PVp8GU6Xaci7Mgo5dDByBaQrab5iY9p-Tf1TsdMI2iP4Q9~92waK3MnTiskC~g8M~IFkTe6IOoPJHBfzi0YgLe0NS-mKqGBR6AeklJl9Ucz-UzYxoiD3nCKwQZNTFkqr3lef8iq34bHZWxjPlvjFTOXhNoE4teUxfaIeqM1~yYd7j5~cyB~FDowCBNuHb66mfDAtDxDTZO7zQ__" alt="" /> */}
    <div className='contact_flex'>
      <div className='contact_email'>
        <h4 className='contact_h4'>Get in touch</h4>
        <h3 className='contact_h3'>Contact</h3>
        <div>
          <input className='contact_email_text t' type="text" placeholder='Name' />
          <input className='contact_email_text r'  type="email" name="" id=""  placeholder='Email'/>
        </div>
        <input className='contact_email_subject' type="text"  placeholder='Subject'/>
        <br />
        <input className='contact_email_message' type="text" placeholder='Massage'/>
        <br />
        <button className='contact_btn' type='submit'>SUBMIT</button>
      </div>
      <div className='contact_location'>
        <div className='contact_box'>
          <img className='contact_box_icon' src={''} alt="" />
          <h4 className='contact_box_h4'>Emergency</h4>
          <h3 className='contact_box_h3'>(237) 681-812-255</h3>
          <br />
          <h3 className='contact_box_h3'>(237) 666-331-894</h3>
        </div>
        <div className='contact_box_dark'>
          <img className='contact_box_icon_dark' src={''} alt="" />
          <h4 className='contact_box_h4_dark'>Emergency</h4>
          <h3 className='contact_box_h3_dark'>(237) 681-812-255</h3>
          <br />
          <h3 className='contact_box_h3_dark'>(237) 666-331-894</h3>
        </div>
        <div className='contact_box'>
          <img className='contact_box_icon' src={''} alt="" />
          <h4 className='contact_box_h4'>Emergency</h4>
          <h3 className='contact_box_h3'>(237) 681-812-255</h3>
          <br />
          <h3 className='contact_box_h3'>(237) 666-331-894</h3>
        </div>
        <div className='contact_box'>
          <img className='contact_box_icon' src={''} alt="" />
          <h4 className='contact_box_h4'>Emergency</h4>
          <h3 className='contact_box_h3'>(237) 681-812-255</h3>
          <br />
          <h3 className='contact_box_h3'>(237) 666-331-894</h3>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default ContactPage