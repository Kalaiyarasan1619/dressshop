import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';

import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category container my-5">
      {/* Banner */}
      <img className="shop-category-banner img-fluid" src={props.banner} alt="" />
      
      {/* Index Sort Section */}
      <div className="row justify-content-between align-items-center my-4">
        <div className="col-md-auto">
          <p>
            <span>Showing 1-12</span> Out of 36 products
          </p>
        </div>
        <div className="col-md-auto d-flex align-items-center">
          <span>Sort by</span>
          <img src={dropdown_icon} alt="Sort" className="ms-2" />
        </div>
      </div>

      {/* Products Section */}
      <div className="row g-4">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <div key={i} className="col-md-4 col-sm-6">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-4">
        <button className="btn btn-outline-primary">Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
