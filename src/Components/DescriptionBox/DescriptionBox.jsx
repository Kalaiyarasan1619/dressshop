import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
// import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          {/* Navigation Tabs */}
          <div className="d-flex border-bottom pb-2">
            <div className="px-3 py-2 border-bottom border-primary fw-bold">Description</div>
            <div className="px-3 py-2 text-muted">Reviews (122)</div>
          </div>

          {/* Description Content */}
          <div className="mt-3">
            <p>
              An e-commerce website is an online platform that facilitates buying and selling
              of products or services over the internet. It serves as a virtual marketplace
              where businesses and individuals showcase their products, interact with customers,
              and conduct transactions without the need for a physical presence. 
              E-commerce websites have gained immense popularity due to their convenience,
              accessibility, and global reach.
            </p>

            <p>
              E-commerce websites typically display products or services with detailed descriptions,
              images, prices, and any available variations (e.g., sizes, colors). Each product usually
              has its own dedicated section with relevant information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
