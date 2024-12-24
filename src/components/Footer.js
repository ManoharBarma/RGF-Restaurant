import React from "react";

export const Footer = () => {
  return (
    <div className="footer-section" id="contact">
      <div className="bg-amber-400">
        <div className="container ">
          <div className="flex justify-between py-5 flex-wrap">
            {/* <div className=" me-4" data-aos="fade-right">
              <h6 className=" mb-3 font-semibold">Home</h6>{" "}
              <h6 className="  mb-3 font-semibold">Menu</h6>{" "}
              <h6 className="  mb-3 font-semibold">About</h6>
              <h6 className="  mb-3 font-semibold">Contact</h6>
            </div> */}

            <div className="contact-section" data-aos="fade-right">
              <h6 className="mb-3">Connect Us</h6>
              <div className="flex items-center fs-5 mb-2">
                <i className="bx bx-envelope me-2"></i>
                <a
                  href="mailto:raisegrandrestaurant@gmail.com"
                  className="mb-1 h6 text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  raisegrandrestaurant@gmail.com
                </a>
              </div>
              <div className="flex items-center fs-5" data-aos="fade-right">
                <i className="bx bxl-instagram me-2"></i>
                <a
                  href="https://instagram.com/rgf_restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-1 h6 text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  rgf_restaurant
                </a>
              </div>
            </div>

            <div data-aos="fade-right" className="call-section">
              <h6 className="mb-3">Contact Us</h6>
              <div className="flex items-center fs-5 mb-2">
                <i className="bx bx-phone-call me-2"></i>
                <a
                  href="tel:9490353012"
                  className="mb-1 h6 text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  9490353012
                </a>
              </div>
              <div className="flex items-center fs-5">
                <i className="bx bx-phone-call me-2"></i>
                <a
                  href="tel:9490354012"
                  className="mb-1 h6 text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  9490354012
                </a>
              </div>
            </div>

            <div data-aos="fade-right" className="address-section">
              <h6 className="mb-3">Address</h6>
              <a
                href="https://www.google.com/maps/place/Raise+Grand+Family+Restaurant/@17.5425931,80.6216775,15z/data=!4m6!3m5!1s0x3a3411b537248ba5:0xc82f5591b3927c52!8m2!3d17.5425931!4d80.6216775!16s%2Fg%2F11lp4rdlw3?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 h6 text-decoration-none"
                style={{ color: "inherit" }}
              >
                <h6 className="mb-2 font-semibold">
                  Opposite to St.Mary's School, Bhadradri,
                </h6>
                <h6 className="mb-2 font-semibold">
                  Kothagudem district, Kothagudem,
                </h6>
                <h6 className="mb-2 font-semibold">Telangana 507101.</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light text-center p-3">
        Copyright © 2024 RGF Restaurant. All Rights Reserved.
      </div>
    </div>
  );
};
