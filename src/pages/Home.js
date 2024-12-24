import React from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { About } from "../components/About";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Menu />
      <About />
      <Footer />
    </div>
  );
};
