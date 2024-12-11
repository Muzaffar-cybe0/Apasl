import "../sass/latestNews.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import 'animate.css';
import dataJson from '../data/speakersData.json'
export default function LatestNews() {
  const [data, setData] = useState([]);
  const [animate, setAnimate] = useState(false);
  const scrollNewsRef = useRef(null);
  useEffect(()=>{
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
      })
      .catch((err) => console.error("Failed to fetch speakers data:", err));


      scrollNewsRef.current = () => {
        if (window.scrollY > 2850) {
          setAnimate(true);
        }
      };
      window.addEventListener("scroll", scrollNewsRef.current);
  
      return () => {
        window.removeEventListener("scroll", scrollNewsRef.current);
      };
  },[])
  return (
    <div className="latestNews" id="blog">

       <div className={`latestNews_wrapper-1 ${animate ? "animate__animated animate__backInRight" : ""}`}>
        <p>info update</p>
        <h1>latest news</h1>
       </div>

      <div className="latestNews_wrapper-2">
      {dataJson.blog.map((item) => {
        const title = item.title;
        const truncatedTitle =
          title.length > 3 ? `${title.slice(0, 16)}` : title;
        const info = item.info1;
        const truncatedInfo = info.length > 20 ? `${info.slice(0, 100)}` : info;
        return (
          <div className={`latestNews_wrapper-2_card ${animate ? "animate__animated animate__backInUp" : ""}`} key={item.id}>
            <div className="latestNews_wrapper-2_card_child1">
              <img src={item.image} alt="blog" />
            </div>

            <div className="latestNews_wrapper-2_card_child2">
              <div>
                <span>
                  <Link to={"authorblogs"}>
                    <i className="fa-regular fa-user"></i> Exhobz
                  </Link>
                  <p>
                    <i className="fa-solid fa-calendar-days"></i> march 10, 2019
                  </p>
                </span>
                <Link to={`/home/blog/${item.id}`}>{truncatedTitle}</Link>
              </div>
              <p>{truncatedInfo}</p>
              <Link to={`/home/blog/${item.id}`} className="latestNews_wrapper-2_card_child2_continueBtn">
                <p>Continue</p>
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        );
      })}
      </div>
     
      
    </div>
  );
}
