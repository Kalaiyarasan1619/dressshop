import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
// import "./NewCollections.css";
import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className="container my-5">
      {/* Section Title */}
      <h2 className="text-center fw-bold mb-4">New Collections</h2>
      <hr className="mx-auto w-25" />

      {/* Grid Layout for Items */}
      <div className="row g-4">
        {new_collections.map((item, i) => (
          <div key={i} className="col-md-4 col-sm-6 col-12">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
