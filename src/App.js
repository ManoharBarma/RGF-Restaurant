import "./App.css";
import { Home } from "./pages/Home";
import "boxicons";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
