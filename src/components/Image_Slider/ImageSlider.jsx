import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

const ImageSlider = ({ items }) => {
  const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 9,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="image-slider-item">
            <div
              className="image-slider-image"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            ></div>
            <p className="image-slider-name">{item.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;