import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "../sass/eventGallery.scss";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import 'animate.css';

export default function EventGallery() {
  const [animate, setAnimate] = useState(false);
  const slides = [
    {
      id: 1,
      thumb: "https://lipsum.app/id/31/192x144",
      image: "https://lipsum.app/id/31/640x480",
    },
    {
      id: 2,
      thumb: "https://lipsum.app/id/35/192x144",
      image: "https://lipsum.app/id/35/640x480",
    },
    {
      id: 3,
      thumb: "https://lipsum.app/id/34/192x144",
      image: "https://lipsum.app/id/34/640x480",
    },
    {
      id: 4,
      thumb: "https://lipsum.app/id/60/192x144",
      image: "https://lipsum.app/id/60/640x480",
    },
    {
      id: 5,
      thumb: "https://lipsum.app/id/33/192x144",
      image: "https://lipsum.app/id/33/640x480",
    },
    {
      id: 6,
      thumb: "https://lipsum.app/id/59/192x144",
      image: "https://lipsum.app/id/59/640x480",
    },
    {
      id: 7,
      thumb: "https://lipsum.app/id/37/192x144",
      image: "https://lipsum.app/id/37/640x480",
    },
  ];
  const scrollGalleryRef = useRef(null);

  useEffect(() => {
    scrollGalleryRef.current = () => {
      if (window.scrollY > 3590) {
        setAnimate(true);
      }
    };
    window.addEventListener("scroll", scrollGalleryRef.current);

    return () => {
      window.removeEventListener("scroll", scrollGalleryRef.current);
    };
  }, []);
  
  useEffect(() => {
    
    const carousel = new Carousel(
      document.getElementById("myCarousel"),
      {
        Dots: false,
      },
      { Thumbs }
    );

    // Cleanup function to remove the carousel instance when the component unmounts
    return () => carousel.destroy();

    
  }, []);
  
  return (
    <div className={`eventGallery ${animate ? "animate__animated animate__backInUp" : ""}`}>
      <div className="f-carousel" id="myCarousel">
        {slides.map((slide) => (
          <div
            className="f-carousel__slide"
            data-thumb-src={slide.thumb}
            key={slide.id}
          >
            <img
              width="640"
              height="480"
              alt={`Slide ${slide.id}`}
              src={slide.image} // Use 'src' instead of 'data-lazy-src' for better browser compatibility
            />
          </div>
        ))}
      </div>
    </div>
  );
}
