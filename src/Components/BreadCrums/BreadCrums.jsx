import React from 'react';
import './BreadCrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const BreadCrums = (props) => {
    const { product } = props;

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb d-flex align-items-center">
                <li className="breadcrumb-item"><a href="/" className="text-decoration-none text-dark">Home</a></li>
                <li><img src={arrow_icon} alt="" className="mx-2" /></li>

                <li className="breadcrumb-item"><a href="/shop" className="text-decoration-none text-dark">Shop</a></li>
                <li><img src={arrow_icon} alt="" className="mx-2" /></li>

                <li className="breadcrumb-item"><a href={`/shop/${product.category}`} className="text-decoration-none text-dark text-capitalize">{product.category}</a></li>
                <li><img src={arrow_icon} alt="" className="mx-2" /></li>

                <li className="breadcrumb-item active text-capitalize" aria-current="page">{product.name}</li>
            </ol>
        </nav>
    );
};

export default BreadCrums;
