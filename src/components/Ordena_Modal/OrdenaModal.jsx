import React, { useState } from 'react';
import './OrdenaModal.css';

const OrdenaModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="ordena-button" onClick={toggleModal}>
        Ordena 
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Ordena</h2>
            <button className="flashy-button">Para recoger en tienda</button>
            <button className="flashy-button">Pedido Delivery</button>
            <div className="encuentranos">
              <span>Encuentranos:</span>
              <p>12345 Address St, City, Country</p>
            </div>
            <button className="close-button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdenaModal;