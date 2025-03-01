import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS import
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" height="40" className="me-2" />
          <h4 className="fw-bold mb-0">SHOPPER</h4>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${menu === "shop" ? "active fw-bold text-primary" : ""}`}
                onClick={() => setMenu("shop")}
              >
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/men" 
                className={`nav-link ${menu === "mens" ? "active fw-bold text-primary" : ""}`}
                onClick={() => setMenu("mens")}
              >
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/women" 
                className={`nav-link ${menu === "womens" ? "active fw-bold text-primary" : ""}`}
                onClick={() => setMenu("womens")}
              >
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/kids" 
                className={`nav-link ${menu === "kids" ? "active fw-bold text-primary" : ""}`}
                onClick={() => setMenu("kids")}
              >
                Kids
              </Link>
            </li>
          </ul>

          {/* Login & Cart Section */}
          <div className="d-flex align-items-center gap-3">
            <Link to="/login">
              <button className="btn btn-outline-primary px-4">Login</button>
            </Link>
            <Link to="/cart" className="position-relative">
              <img src={cart_icon} alt="Cart" height="30" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
