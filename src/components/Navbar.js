import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-amber-400 position-sticky top-0 nav-bar">
      <div className="container flex items-center justify-between  py-3 px-4">
        <div>
          <h4 className="mb-0 cursive-font font-semibold">RGF Restaurant</h4>
        </div>
        <div className="flex items-center justify-center cursive-font nav-items">
          <a href="#" className="mb-0 font-semibold h6 text-decoration-none">
            <h6 className="px-4 mb-0 font-semibold">Home</h6>
          </a>
          <a
            href="#menu"
            className=" mb-0 font-semibold h6 text-decoration-none"
          >
            <h6 className="px-4 mb-0 font-semibold">Menu</h6>
          </a>
          <a
            href="#about"
            className=" mb-0 font-semibold h6 text-decoration-none"
          >
            <h6 className="px-4 mb-0 font-semibold">About</h6>
          </a>
          <a
            href="#contact"
            className=" mb-0 font-semibold h6 text-decoration-none"
          >
            <h6 className="px-4 mb-0 font-semibold">Contact</h6>
          </a>
        </div>
      </div>
    </div>
  );
};
