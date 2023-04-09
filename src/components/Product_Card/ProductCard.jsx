import React, { useState } from 'react'
import './ProductCard.css';

const ProductCard = ({ image, tag1, tag2, title, description, price, offerPrice }) => {

  return (
    <div className="card">
			<div className="imageSection">
				<div className="tags">
					<span className="tag">{tag1}</span>
					<span className="tag">{tag2}</span>
				</div>  
				<div className="image">
					<img src={image} alt={title} />
				</div>
			</div>
      <div className="infoSection">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <div className="priceSection">
              <span className="offerPrice">S/. {offerPrice}</span>
							<span className="price">S/. {price}</span>
          </div>
          <button className="addButton">Agregar</button>
      </div>
  </div>
  );
}

export default ProductCard