import React, { useState } from 'react';
import './DropdownMenu.css';
import burgerImage from '../../assets/images/burger.png'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = Array.from({ length: 10 }, (_, i) => ({
    name: `Option ${i + 1}`,
    image: burgerImage, // Replace with your desired image URL
  }));

  return (
     <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Nuestro Menú
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-grid">
            {menuItems.map((item, index) => (
              <div className="dropdown-item" key={index}>
                <img src={item.image} alt={item.name} className="dropdown-item-image" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <button className="view-menu-button">Ver menú completo</button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;