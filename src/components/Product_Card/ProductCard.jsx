import React, { useState } from 'react'
import './ProductCard.css';
import ProductModal from '../Product_Modal/ProductModal';

const ProductCard = ({ image, tag1, tag2, title, description, price, offerPrice }) => {

	const [showModal, setShowModal] = useState(false);
	const [meatDoneness, setMeatDoneness] = useState('');
  const [sauces, setSauces] = useState([]);
  const [sideDish, setSideDish] = useState('');

	const handleCardClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

	 const handleMeatDonenessChange = (event) => {
    setMeatDoneness(event.target.value);
  };

  const handleSaucesChange = (event) => {
    const value = event.target.value;
    if (sauces.includes(value)) {
      setSauces(sauces.filter(sauce => sauce !== value));
    } else {
      setSauces([...sauces, value]);
    }
  };

  const handleSideDishChange = (event) => {
    setSideDish(event.target.value);
  };

  return (
    <div className="card" onClick={handleCardClick}>
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
			<ProductModal show={showModal} onClose={closeModal}>
        <div className="modalSection imageSection">
					<h2 className="imageTitle">{title}</h2>
          <img src={image} alt={title} className="modalImage" />
        </div>
        <div className="modalSection">
					<p>{title}: S/. {price}</p>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Offer Price: {offerPrice}</p>
					<label htmlFor="meatDoneness">Escoge el término de la carne:</label>
          <select name="meatDoneness" value={meatDoneness} onChange={handleMeatDonenessChange}>
            <option value="">Selecciona un término</option>
            <option value="blue">Termino azul</option>
            <option value="half">Termino 1/2</option>
            <option value="three-quarters">Termino 3/4</option>
          </select>

          <h4>Escoge tus cremas:</h4>
          <div>
            <label>
              <input type="checkbox" value="ketchup" onChange={handleSaucesChange} />
              Ketchup
            </label>
            <label>
              <input type="checkbox" value="mayo" onChange={handleSaucesChange} />
              Mayonesa
            </label>
            <label>
              <input type="checkbox" value="aji" onChange={handleSaucesChange} />
              Aji
            </label>
          </div>

          <h4>Acompaña tu orden con:</h4>
          <div>
            <label>
              <input type="radio" name="sideDish" value="papas" checked={sideDish === 'papas'} onChange={handleSideDishChange} />
              Papas
            </label>
            <label>
              <input type="radio" name="sideDish" value="camotes" checked={sideDish === 'camotes'} onChange={handleSideDishChange} />
              Camotes
            </label>
        </div>
			</div>	
      </ProductModal>
  </div>
  );
}

export default ProductCard