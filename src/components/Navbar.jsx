import React, { useEffect, useRef, useState } from "react";
import "../sass/navbar.scss";
import "../css/hamburgers.min.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menu, setMenu] = useState(false);
  const scrollListenerRef = useRef(null);
  useEffect(() => {
    scrollListenerRef.current = () => {
      if (window.scrollY > 90) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", scrollListenerRef.current);

    return () => {
      window.removeEventListener("scroll", scrollListenerRef.current);
    };
  }, []);
  
  const handleMenu = () => {
    setMenu((p) => !p);
  };

  return (
    <div className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="navbar_child-1">
        <Link to={"/home"}>
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className={`navbar_child-2 ${menu ? "menuShow" : ""}`}>
        <Link to={"/home"}>Home</Link>
        <a href="#sponsors">Sponsors</a>
        <a href="#about">About</a>
        <a href="#speakers">Speakers</a>
        <a href="#schedules">Schedules</a>
        <a href="#blog">Blog</a>
      </div>

      <div className="navbar_child-3">
        <i className="fa-solid fa-bars" onClick={handleMenu}></i>
      </div>
    </div>
  );
}
