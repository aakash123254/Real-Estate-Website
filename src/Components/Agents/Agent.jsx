import React from 'react';

export default function Agent({ image, title, name }) {
  return (
    <div className="agent">
      <div className="agent-img">
        <img src={image} alt="" />
      </div>
      <div className="agent-details">
        <div className="name">
          <p className="agent-title">{title}</p>
          <p className="agent-name">{name}</p>
        </div>
        <div className="socials">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}