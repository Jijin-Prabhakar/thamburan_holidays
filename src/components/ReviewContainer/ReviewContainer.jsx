import React, { useState } from "react";
import { Element } from "react-scroll";
import reviewData from "../../review.json";
import "./ReviewContainer.css";

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const ReviewContainer = ({ addReview }) => {
  const [userInput, setUserInput] = useState();

  const [review, setReview] = useState(reviewData);

  const [value, setValue] = React.useState(4);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    addReview(userInput);
    setUserInput("");
  };

  return (
    <Element className="container review_Container" id="reviews">
      <h1>Reviews</h1>
      <div className="review_Container_mappedItems_form d-flex">
        <div className="reviewContainer_mappedItems d-flex">
          {review.map((item) => {
            return (
              <div className="reviewsContainer_review mt-4" key={item.id}>
                <h3>{item.name}</h3>
                <Box
                  component="fieldset"
                  mb={3}
                  borderColor="transparent"
                  className="rating_box"
                >
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <section>
                  <p>{item.review}</p>
                </section>
              </div>
            );
          })}
        </div>
      </div>
      <div className="reviewContainer_inputForm">
        <form action="#" className="review_Container_form mt-5">
          <p>
            Hey everyone!
            <br />
            <br />
            Positive reviews from awesome customers like you help others to feel
            confident about choosing THAMBURAN HOLIDAYS too. Could you take 60
            seconds to share your happy experiences ?<br />
            <br />
            We will be forever grateful. Thank you in advance for helping us
            out!
          </p>
          <input type="text" placeholder="Enter your name here" />
          <br />
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={userInput}
            placeholder="Enter your valid comments here..."
            onChange={handleChange}
          />
          <section className="review_Container_button_section">
            <button onClick={handleSubmit}>Submit</button>
          </section>
        </form>
      </div>
    </Element>
  );
};

export default ReviewContainer;
