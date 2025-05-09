
import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const slides = [
  { type: "video", src: require("../assets/images/slide1.mp4") },
  { type: "image", src: require("../assets/images/slide2.jpg") },
  { type: "image", src: require("../assets/images/slide3.jpg") },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {slides[current].type === "video" ? (
        <video className="slide-media" autoPlay muted loop>
          <source src={slides[current].src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={slides[current].src} alt="slide" className="slide-media" />
      )}
    </div>
  );
};

export default Slideshow;
