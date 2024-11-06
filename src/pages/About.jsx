import React from 'react'
import "../css/About.css"
export default function About() {
  return (
    <div className='about'>
    <div className='container'>
    <div className='about_banner'>
      <img className='about_img' src="https://www.brightsidemedical.com.au/wp-content/uploads/2019/03/happy-doctors-760x380.jpg" alt="" />
      <div className='about_text'>
        <h4 className='about_h4'>Welcome to Hospital name</h4>
        <h1 className='about_h1'>Best Care for Your
        Good Health</h1>
        <div className='about_flex'>
         <div>
         <div className='about_mini_flex'>
            <div className='about_circle'></div>
            <p className='about_mini_p'>A Passion for Healing</p>
          </div>
          <div className='about_mini_flex'>
            <div className='about_circle'></div>
            <p className='about_mini_p'>A Passion </p>
          </div>
          <div className='about_mini_flex'>
            <div className='about_circle'></div>
            <p className='about_mini_p'>A Healing</p>
          </div>
         </div>
          <div className='second_about_flex'>
          <div className='about_mini_flex'>
            <div className='about_circle'></div>
            <p className='about_mini_p'>For Healing</p>
          </div>
          <div className='about_mini_flex'>
            <div className='about_circle'></div>
            <p className='about_mini_p'>A Passion for Healing</p>
          </div>
          <div className='about_mini_flex'>
            <div className='about_circle'></div>
            <p className='about_mini_p'>A Passion for</p>
          </div>
          </div>
        </div>
        <p className='about_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempore neque atque dolores eaque optio sequi vero voluptatem facere quas id temporibus corporis dolorem eius, aliquam ratione dignissimos labore veritatis.</p>
        <br />
        <p className='about_p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nemo adipisci, illum pariatur nam aut!</p>
      </div>
    </div>
    </div>
    <div className='about_banner_second'>
        <img src="https://static.euronews.com/articles/stories/07/28/39/06/1920x1080_cmsv2_3ca855ee-4e62-5f54-91db-593910fb3a90-7283906.jpg" alt="" />
        <div className='dark_img'></div>
        <div className='dark_div'>
          
        <h4 className='dark_h4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolore, consequatur deserunt debitis fuga ad optio illum molestiae eveniet explicabo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam odio sint est atque quis eaque cupiditate nostrum animi? Veritatis, dolore.</h4>
        </div>
        <div className='dark'>
        <div className='div_hr'></div>
        <h3 className='dark_title'>John Doe</h3>
        </div>
    </div>
  </div>
  )
}
