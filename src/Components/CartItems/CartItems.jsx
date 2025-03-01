import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { totalcart, all_product, cartItems, removeFromCart, updateCartItem } =
    useContext(ShopContext);

  // Function to increase the quantity of the item
  const increaseQuantity = (id) => {
    updateCartItem(id, cartItems[id] + 1); // Increase the quantity by 1
  };

  // Function to decrease the quantity of the item
  const decreaseQuantity = (id) => {
    if (cartItems[id] > 1) {
      updateCartItem(id, cartItems[id] - 1); // Decrease the quantity by 1
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>

      <div className="row bg-light py-2 text-center fw-bold border-bottom">
        <div className="col-2">Product</div>
        <div className="col-3">Title</div>
        <div className="col-2">Price</div>
        <div className="col-2">Quantity</div>
        <div className="col-2">Total</div>
        <div className="col-1">Remove</div>
      </div>

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="row text-center align-items-center py-3 border-bottom">
              <div className="col-2">
                <img src={e.image} alt={e.name} className="img-fluid carticon-product-icon" />
              </div>
              <div className="col-3">{e.name}</div>
              <div className="col-2">${e.new_price}</div>
              <div className="col-2">
                <button className="btn btn-outline-primary" onClick={() => decreaseQuantity(e.id)}>-</button>
                <span className="mx-2">{cartItems[e.id]}</span>
                <button className="btn btn-outline-primary" onClick={() => increaseQuantity(e.id)}>+</button>
              </div>
              <div className="col-2">${e.new_price * cartItems[e.id]}</div>
              <div className="col-1">
                <img
                  className="cartitems-remove-icon img-fluid"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Cart Totals Section */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="p-3 border rounded shadow">
            <h4>Cart Totals</h4>
            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p>${totalcart()}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <h5>Total</h5>
              <h5>${totalcart()}</h5>
            </div>
            <button className="btn btn-success w-100 mt-3">Proceed To Checkout</button>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="col-md-6">
          <div className="p-3 border rounded shadow">
            <p>If you have a promo code, enter it here:</p>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
