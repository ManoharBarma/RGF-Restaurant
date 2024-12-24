import React, { useEffect, useRef } from "react";
import video from "../assets/videos/restaurant.mp4";

export const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.muted = true; // Ensure video is muted
          videoRef.current.play().catch((error) => {
            console.error("Autoplay failed:", error);
          });
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-light-yellow py-5" id="about">
      <div className="text-center  " data-aos="zoom-in">
        <h1 className="text-success mb-3 cursive-font">About US</h1>
        <h1 className="text-success styled-arrows-font mb-5 ">
          A Journey of Taste, Tradition, and Togetherness
        </h1>
      </div>{" "}
      <video controls autoPlay={true} loop={true} ref={videoRef}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
