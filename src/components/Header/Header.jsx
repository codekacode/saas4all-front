import React from 'react';
import './Header.css';
import SearchIcon from '../../assets/icons/SearchIcon';
import MapPinIcon from '../../assets/icons/MapsIcon';
import DropdownMenu from '../Dropdown_Menu/DropdownMenu';
import OrdenaModal from '../Ordena_Modal/OrdenaModal';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">Your Logo</div>
        <nav>
          <DropdownMenu />
          <a href="#quienes-somos">Quiénes Somos</a>
        </nav>
      </div>
      <div className="right-section">
        <a href="#buscar" className="search">
          <SearchIcon />
          Buscar
        </a>
        <a href="#encuentranos" className="maps">
          <MapPinIcon />
          Encuéntranos
        </a>
        <OrdenaModal />
      </div>
    </header>
  );
};

export default Header;