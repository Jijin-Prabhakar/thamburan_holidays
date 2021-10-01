import React, { useState } from "react";
import { Element } from "react-scroll";
import reviewData from "../../review.json";
import "./ReviewContainer.css";

// import Rating from "@material-ui/lab/Rating";
// import Box from "@material-ui/core/Box";

const ReviewContainer = () => {
  const [review, setReview] = useState(reviewData);
  const [userName, setUserName] = useState();
  // const [value, setValue] = useState(3);
  // const [userRating, setUserRating] = useState();
  const [userReview, setUserReview] = useState();

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  // const handleRating = (e) => {
  //   setUserRating(e.target.value);
  // };

  const handleReview = (e) => {
    setUserReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    // Name
    addReview(userName);
    setUserName("");
    // Rating
    // addReview(userRating);
    // setUserRating("");
    // Review
    addReview(userReview);
    setUserReview("");
  };

  const addReview = () => {
    let newReview = [
      ...review,
      {
        id: review.length + 1,
        // rating: userRating,
        name: userName,
        review: userReview,
      },
    ];
    setReview(newReview);
  };

  return (
    <Element className="container review_Container" id="reviews">
      <h1 data-aos="zoom-in">Reviews</h1>
      <div className="review_Container_mappedItems_form d-flex">
        <div className="reviewContainer_mappedItems d-flex">
          {review.map((item) => {
            return (
              <div
                className="reviewsContainer_review"
                key={item.id}
                data-aos="zoom-in"
              >
                <div className="review_content_box">
                  <h3>{item.name}</h3>
                  {/* <Box
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                    className="rating_box"
                  >
                    <Rating
                      name="read-only"
                      className="user_rating"
                      value={value}
                      readOnly
                    />
                  </Box> */}
                  <section>
                    <p>{item.review}</p>
                  </section>
                </div>
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
          <input
            type="text"
            value={userName}
            placeholder="Enter your name here"
            onChange={handleName}
          />
          <br />
          <textarea
            name="review"
            cols="30"
            rows="10"
            value={userReview}
            placeholder="Enter your valid comments here..."
            onChange={handleReview}
          />
          {/* <section className="mt-3">
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              className="rating_box"
            >
              <p className="p-0 text-center">RATE US</p>
              <Rating
                name="read-only"
                className="user_rating_input"
                value={userRating}
                onChange={handleRating}
              />
            </Box>
          </section> */}
          <section className="review_Container_button_section mt-3 mb-2">
            <button onClick={handleSubmit}>Submit</button>
          </section>
        </form>
      </div>
    </Element>
  );
};

export default ReviewContainer;
