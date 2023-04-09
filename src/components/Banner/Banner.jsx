import React from 'react';
import './Banner.css';

const Banner = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-description">{description}</p>
        <button className="flashy-button">{buttonText}</button>
      </div>
      <div className="banner-right">
        <img src={imageUrl} alt="Banner" className="banner-image" />
      </div>
    </div>
  );
};

export default Banner;