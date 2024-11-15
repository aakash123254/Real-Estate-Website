import React from "react";

export default function Agent({ image, title, name, phone }) {
  return (
    <>
      <style>
        {`
          .agent-phone {
            font-weight: bold; /* Bold text */
            padding: 10px 20px 10px 10px; /* Padding above and below */
            margin-left:10px;
          }
        `}
      </style>
      <div className="agent">
        <div className="agent-img">
          <img src={image} alt={`${name}`} />
        </div>
        <div className="agent-details">
          <div className="name">
            <p className="agent-title">{title}</p>
            <p className="agent-name">{name}</p>
            <p className="agent-phone">Phone: {phone}</p> {/* Applying CSS class */}
          </div>
          <div className="socials">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  );
}
