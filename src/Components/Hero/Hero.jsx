import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
// import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold">New Arrivals Only</h2>

          <div className="d-flex align-items-center justify-content-center justify-content-md-start mt-3">
            <p className="mb-0 me-2 fs-4">new</p>
            <img src={hand_icon} alt="Hand Icon" style={{ width: "40px" }} />
          </div>

          <p className="fs-2 fw-bold">Collections</p>
          <p className="fs-2 fw-bold">for Everyone</p>

          {/* Button Section */}
          <div className="d-inline-flex align-items-center bg-primary text-white px-4 py-2 rounded-pill mt-3">
            <span className="me-2">Latest Collection</span>
            <img src={arrow_icon} alt="Arrow Icon" style={{ width: "20px" }} />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img
            src={hero_image}
            alt="Hero"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
