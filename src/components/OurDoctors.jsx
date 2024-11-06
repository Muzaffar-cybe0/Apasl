import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';

import "../Sass/ourDoctors.scss";
import { FreeMode, Pagination, Autoplay,Navigation } from "swiper/modules";

import Doctor_1 from "../assets/doctor_1.svg";
import Doctor_2 from "../assets/doctor_2.svg";
import Doctor_3 from "../assets/doctor_3.svg";
export default function OurDoctors() {
  const [doctors, setDoctors] = useState([
    {id:1, name: "Dr. John Doe", specialization: "Cardiologist", image: Doctor_1 },
    {
      id:2,
      name: "Dr. Jane Smith",
      specialization: "Dermatologist",
      image: Doctor_2,
    },
    {
      id:3,
      name: "Dr. Mark Johnson",
      specialization: "Neurologist",
      image: Doctor_3,
    },
    {id:4, name: "Dr. John Doe", specialization: "Cardiologist", image: Doctor_1 },
    {
      id:5,
      name: "Dr. Jane Smith",
      specialization: "Dermatologist",
      image: Doctor_2,
    },
    {
      id:6,
      name: "Dr. Mark Johnson",
      specialization: "Neurologist",
      image: Doctor_3,
    },
  ]);
  return (
    <div className="ourDoctors_container">
      <div className="ourDoctors_container_child1">
        <p>Trusted Care</p>
        <p>Our Doctors</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,FreeMode, Pagination,Navigation]}
        className="mySwiper_ourDoctors"
      >
        {doctors.length > 0 ? (
         doctors.map((item)=>{
          return(
               <SwiperSlide key={item.id}>
               <div className="ourDoctors_child-1">
                 <img src={item.image} alt="icon" />
               </div>
               <div className="ourDoctors_child-2">
                 <p>{item.name}</p>
                 <h1>{item.specialization}</h1>
                 <div>
                 <i className="fa-brands fa-linkedin-in"></i>
                 <i className="fa-brands fa-facebook-f"></i>
                 <i className="fa-brands fa-instagram"></i>
                 </div>
               </div>
               <div className="ourDoctors_child-3">
                 <a href="#">View Profile</a>
               </div>
             </SwiperSlide>
          )
         })
        ) : (
          ""
        )}
      </Swiper>
    </div>
  );
}
