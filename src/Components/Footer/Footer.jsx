import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <img src={footer_logo} alt="Logo" className="mb-2" style={{ width: "120px" }} />
            <p className="fw-bold">Shopper</p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Company</a></li>
              <li><a href="#" className="text-light text-decoration-none">Products</a></li>
              <li><a href="#" className="text-light text-decoration-none">Offices</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Icons Section */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-light">
                <img src={instagram_icon} alt="Instagram" style={{ width: "30px" }} />
              </a>
              <a href="#" className="text-light">
                <img src={whatsapp_icon} alt="WhatsApp" style={{ width: "30px" }} />
              </a>
              <a href="#" className="text-light">
                <img src={pinterest_icon} alt="Pinterest" style={{ width: "30px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-3">
          <hr className="border-light" />
          <p className="mb-0">Copyright © 2024 - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
