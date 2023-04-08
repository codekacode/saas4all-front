import React, { useState } from 'react'
import './ProductCard.css';

const ProductCard = ({image,title, description, price, tag}) => {

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleBuyClick = () => {
    alert(`Added ${quantity} ${title}(s) to your cart.`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <span className="product-tag">{tag}</span>
      <div className="quantity-selector">
        <label htmlFor={`quantity-${title}`}>Quantity: </label>
        <input
          type="number"
          id={`quantity-${title}`}
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </div>
      <button className="buy-button" onClick={handleBuyClick}>
        Agregar
      </button>
    </div>
  );
}

export default ProductCard