import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="card shadow-sm border-0 text-center p-3">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img
          src={props.image}
          alt={props.name}
          className="card-img-top img-fluid rounded-3"
        />
      </Link>
      <p className="mt-3 fw-semibold">{props.name}</p>
      <div className="d-flex justify-content-center align-items-center gap-2">
        <span className="fw-bold text-success">${props.new_price}</span>
        <span className="text-muted text-decoration-line-through">${props.old_price}</span>
      </div>
    </div>
  );
};

export default Item;
