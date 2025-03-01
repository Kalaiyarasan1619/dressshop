import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
// import "./Offers.css";
import exclucive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold">Exclusive</h2>
          <h2 className="fw-bold">Offers for You</h2>
          <p className="text-muted">Only on best seller products</p>
          <button className="btn btn-primary mt-3">Check Now</button>
        </div>

        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img
            src={exclucive_image}
            alt="Exclusive Offers"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
