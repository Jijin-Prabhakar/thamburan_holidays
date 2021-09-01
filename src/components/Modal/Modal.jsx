import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modalContainer">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        GET QUOTE
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Get Quote
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="#" className=" mb-3">
                Name
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-75"
              />
              <br />
              <label htmlFor="#" className="mt-4 mb-3">
                Contact Number
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter your contact number"
                className="w-75"
              />
              <br />
              <label htmlFor="#" className="mt-4 mb-2">
                Email Address
              </label>
              <br />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-75"
              />
              <br />
              <label htmlFor="#" className="mt-4 mb-2">
                Message
              </label>
              <br />
              <textarea
                type="email"
                placeholder="Please leave your queries and messages here..."
                className="w-75"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Get a call from us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
