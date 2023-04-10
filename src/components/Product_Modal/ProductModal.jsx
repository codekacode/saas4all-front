import React from 'react';
import './ProductModal.css';

const ProductModal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="closeButton" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductModal;