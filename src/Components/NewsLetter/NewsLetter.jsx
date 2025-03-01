import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
// import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold">Get Exclusive Offers on Your Email</h2>
      <p className="text-muted">Subscribe to our newsletter and stay updated</p>

      {/* Email Subscription Form */}
      <div className="d-flex justify-content-center mt-3">
        <input
          type="email"
          className="form-control w-50 me-2"
          placeholder="Your Email ID"
        />
        <button className="btn btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
