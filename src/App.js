import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

// Components
import Header from "./components/Header/Header";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import GalleryContainer from "./components/GalleryContainer/GalleryContainer";
import ReviewContainer from "./components/ReviewContainer/ReviewContainer";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <BannerContainer />
      <GalleryContainer />
      <ReviewContainer />
      <About />
      <Footer />
    </div>
  );
}

export default App;
