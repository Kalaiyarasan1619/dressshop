import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Images (Collage Layout) */}
        <div className="col-md-5">
          <div className="productdisplay-img-list mb-3 row">
            {/* Image Collage */}
            <div className="col-6 mb-3">
              <img src={product.image} alt="" className="img-fluid" />
            </div>
            <div className="col-6 mb-3">
              <img src={product.image} alt="" className="img-fluid" />
            </div>
            <div className="col-6 mb-3">
              <img src={product.image} alt="" className="img-fluid" />
            </div>
            <div className="col-6 mb-3">
              <img src={product.image} alt="" className="img-fluid" />
            </div>
          </div>

          {/* Main Image */}
          {/* <div className="productdisplay-img">
            <img
              className="productdisplay-main-img img-fluid"
              src={product.image}
              alt=""
            />
          </div> */}
        </div>

        {/* Product Info */}
        <div className="col-md-7">
          <h1 className="fw-bold">{product.name}</h1>
          <div className="productdisplay-right-star mb-3">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-right-price mb-3">
            <div className="productdisplay-right-price-old text-muted text-decoration-line-through">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new text-success fw-bold">
              ${product.new_price}
            </div>
          </div>
          <div className="productdisplay-right-description mb-4">
            <p>
              A Lightweight, usually knitted, pullover shirt, close-fitting
              and with a round neckline and short sleeves. Worn as an undershirt
              or outer garment.
            </p>
          </div>
          <div className="productdisplay-right-size mb-4">
            <h5>Select Size</h5>
            <div className="productdisplay-right-sizes d-flex gap-2">
              <div className="btn btn-outline-secondary">S</div>
              <div className="btn btn-outline-secondary">M</div>
              <div className="btn btn-outline-secondary">L</div>
              <div className="btn btn-outline-secondary">XL</div>
              <div className="btn btn-outline-secondary">XXL</div>
            </div>
          </div>
          <button
            className="btn btn-primary w-100 mb-3"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="productdisplay-right-category">
            <span className="fw-bold">Category :</span> Women, T-Shirt, Crop
            Top
          </p>
          <p className="productdisplay-right-category">
            <span className="fw-bold">Tags :</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
