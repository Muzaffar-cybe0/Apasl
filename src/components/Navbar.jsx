import React, { useEffect, useRef, useState } from "react";
import "../Sass/navbar.scss";
import "../Sass/hamburgers.min.css";
import Logo from "../assets/logo.png";
import Search_icon from "../assets/navbar_search_icon.svg";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [active, SetActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [addSticky, setAddSticky] = useState(false);

  const navbar = useRef();
  const Menu = useRef();
  const Menu_btn = useRef();
  const MakeActive = () => {
    SetActive((p)=>!p);
    console.log(Menu);
    
    if (active === false) {
     Menu.current.classList.add("show")
    } else {
      Menu.current.classList.remove("show")
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setAddSticky(true);
        navbar.current.style.borderRadius = "50px";
      } else {
        setAddSticky(false);
        navbar.current.style.borderRadius = "0px";
      }
    };

    const handleMenu = () => {
      if (window.scrollY >= 300) {
        setMenuActive(true);
      } else {
        setMenuActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleMenu);
    };
  }, [window.onscroll]);

  return (
    <div className={`navbar_container ${addSticky ? "sticky" : ""}`}>
      <div className={`navbar_container_olderCh-1  `} ref={navbar}>
        <div className="navbar_container_olderCh-1_child-1"
        style={{display:!menuActive ? "none" : "block"}}
        >
          <img src={Logo} alt="logo" />
        </div>

        <div
          className={`navbar_container_olderCh-1_child-2 ${
            menuActive ? "hidden" : ""
          }`}
          ref={Menu}
        >
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="doctors">Doctors</NavLink>
          <NavLink to="news">News</NavLink>
          <NavLink to="contactPage">Contact</NavLink>
        </div>

        <div className="navbar_container_olderCh-1_child-3">
          <div
            className={`hamburger hamburger--squeeze ${
              active ? "is-active" : ""
            }`}
            style={{display:!menuActive ? "none" : "block"}}
            ref={Menu_btn}
            type="button"
            onClick={MakeActive}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>

        <div className={`navbar_container_olderCh-1_child-4 ${menuActive ? "display" : ""}`}>
        <img src={Search_icon} alt="icon" />
        <button type="button">
          <Link to={'/appointment'}>
            Appointment
          </Link>
        </button>
        </div>

      </div>
    </div>
  );
}
