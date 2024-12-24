import React from "react";
// import banner1 from "../assets/images/menu/page1.jpg";
import banner2 from "../assets/images/menu/page2.jpg";
import banner3 from "../assets/images/menu/page3.jpg";
import banner4 from "../assets/images/menu/page4.jpg";
import banner5 from "../assets/images/menu/page5.jpg";
import banner6 from "../assets/images/menu/page6.jpg";
import banner7 from "../assets/images/menu/page7.jpg";
import banner8 from "../assets/images/menu/page8.jpg";
import banner9 from "../assets/images/menu/page9.jpg";
import banner10 from "../assets/images/menu/page10.jpg";
import banner11 from "../assets/images/menu/page11.jpg";
import banner12 from "../assets/images/menu/page12.jpg";
import banner13 from "../assets/images/menu/page13.jpg";
import banner14 from "../assets/images/menu/page14.jpg";
import banner15 from "../assets/images/menu/page15.jpg";
import banner16 from "../assets/images/menu/page16.jpg";
import banner17 from "../assets/images/menu/page17.jpg";
import banner18 from "../assets/images/menu/page18.jpg";
// import banner19 from "../assets/images/menu/page19.jpg";
import { Container } from "reactstrap";
export const Menu = () => {
  let menuItems = [
    // banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    banner10,
    banner11,
    banner12,
    banner13,
    banner14,
    banner15,
    banner16,
    banner17,
    banner18,
    // banner19,
  ];
  return (
    <div className="menu-section h-50 py-5" id="menu">
      <Container>
        <div className="text-center  " data-aos="zoom-in">
          <h1 className="text-success mb-3 cursive-font"> Our Menu</h1>
          <h1 className="text-success styled-arrows-font mb-4 ">
            From Our Kitchen to Your Plate
          </h1>
        </div>{" "}
        <div className="d-flex flex-wrap justify-content-center pt-4">
          {menuItems?.map((ele, index) => {
            return (
              <img
                src={ele}
                className="menu-item rounded me-3 mb-4"
                data-aos="fade-up"
                key={index}
                alt="image"
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};
