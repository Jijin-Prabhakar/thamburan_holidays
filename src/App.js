import "./App.css";
import Header from "./components/Header/Header";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import GalleryContainer from "./components/GalleryContainer/GalleryContainer";
import ReviewContainer from "./components/ReviewContainer/ReviewContainer";

import { useState } from "react";
import reviewData from "./review.json";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  const [review, setReview] = useState(reviewData);

  // const addReview = (userInput) => {
  //   let copy = [...review, { id: review.length + 1, review: userInput }];
  //   setReview(copy);
  // };

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
