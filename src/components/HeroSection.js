import React from "react";
import banner1 from "../assets/images/biryani.png";

export const HeroSection = () => {
  return (
    <div className=" hero-section bg-light-yellow">
      <div className="container hero-content">
        <div className="h-100 flex items-center justify-between flex-wrap">
          <div>
            <div className="mb-4">
              <h1
                className="cursive-font fw-semibold mb-4 text-success fs-1"
                data-aos="fade-right"
              >
                Welcome to RGF
              </h1>
              <h1
                className="font-bold mb-3 text-7xl text-success styled-arrows-font"
                data-aos="fade-right"
                data-aos-duration="5000"
              >
                Enjoy our
              </h1>
              <h1
                className="font-bold text-7xl text-success styled-arrows-font mb-4"
                data-aos="fade-right"
                data-aos-duration="7000"
              >
                Delicious Meal
              </h1>
            </div>
            <div
              className="flex mb-4 align-items-center"
              data-aos="fade-right"
              data-aos-duration="9000"
            >
              <h3 className="mb-0 text-success fw-semibold cursive-font fs-3">
                Dine - in
              </h3>
              <h3 className="px-3 text-success fs-3 mb-2">|</h3>
              <h3 className="mb-0 text-success fw-semibold cursive-font fs-4">
                Take Away
              </h3>
            </div>
            <div>
              <button
                className="btn btn-warning px-4 p-3 "
                data-aos="fade-right"
              >
                <a
                  href="#menu"
                  className=" mb-0 font-semibold h6 text-decoration-none"
                >
                  <h4 className="mb-0 cursive-font text-success">
                    Explore Menu
                  </h4>
                </a>
              </button>
            </div>
          </div>
          <img src={banner1} className="hero-img w-50" data-aos="zoom-in" />
        </div>
      </div>
    </div>
  );
};
