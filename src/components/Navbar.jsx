import { useEffect, useRef, useState } from "react";
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
      setSticky(window.scrollY > 90);
    };
    window.addEventListener("scroll", scrollListenerRef.current);

    return () => {
      window.removeEventListener("scroll", scrollListenerRef.current);
    };
  }, []);

  const handleMenu = () => setMenu((p) => !p);

  // Scroll to section when an anchor link is clicked
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="navbar_child-1">
        <Link to="/home">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className={`navbar_child-2 ${menu ? "menuShow" : ""}`}>
        <Link to="/home">Home</Link>
        <button onClick={() => scrollToSection("sponsors")}>Sponsors</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("speakers")}>Speakers</button>
        <button onClick={() => scrollToSection("organizers")}>Organizers</button>
        <button onClick={() => scrollToSection("schedules")}>Schedules</button>
      </div>

      <div className="navbar_child-3">
        <i className="fa-solid fa-bars" onClick={handleMenu}></i>
      </div>
    </div>
  );
}
