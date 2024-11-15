import formatCurrency from "../../utils";
import React from "react";
import { Link } from "react-router-dom";

export default function Apartment({
  image,
  title,
  price,
  bathrooms,
  bedrooms,
  id,
}) {
  return (
    <div className="single-apartment">
      <Link to={`/apartment/${id}`} style={{ textDecoration: "none" }}>
        <div className="apartment-image">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="apartment-details">
        <div className="">
          <h4 className="title">{title}</h4>
        </div>
        <div className="apartment-detail">
          <div className="">
            <p className="price">{formatCurrency(price)}</p>
          </div>
          <div className="">
            <p>
              <span className="bath">
                <i className="fa fa-shower" aria-hidden="true"></i>
                {bathrooms}
                <span className="detail"> BA</span>
              </span>
              <span>
                <i className="fa fa-bed" aria-hidden="true"></i>
                {bedrooms}
                <span className="detail"> BD</span>
              </span>
            </p>
          </div>
        </div>
        <button className="checkoutBtn">Check Out</button>
      </div>
    </div>
  );
}
