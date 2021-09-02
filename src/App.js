import "./App.css";
import Header from "./components/Header/Header";
import BannerContainer from "./components/BannerContainer/BannerContainer";
import GalleryContainer from "./components/GalleryContainer/GalleryContainer";
import ReviewContainer from "./components/ReviewContainer/ReviewContainer";

import { useState } from "react";
import reviewData from "./review.json";

function App() {
  const [review, setReview] = useState(reviewData);

  const addReview = (userInput) => {
    let copy = [...review, { id: review.length + 1, review: userInput }];
    setReview(copy);
  };

  return (
    <div className="App">
      <Header />
      <BannerContainer />
      <GalleryContainer />
      <ReviewContainer addReview={addReview} />
    </div>
  );
}

export default App;
