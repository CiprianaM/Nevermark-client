import React from 'react';
import PropTypes from 'prop-types';

import searchIcon from '../../assets/search-icon.svg';

import './HeaderLogged.css';

interface SearchProps {
  updateQuery: any;
}

const HeaderLogged: React.FC<SearchProps> = ({ updateQuery }) => (
  <header className="header-logged">
    <div className="logo-container-logged">
      <a href="#home" className="logo-logged">nevermark</a>
    </div>
    <div className="search-bar-container">
      <div className="search-icon-container">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
      </div>
      <div className="search-input-container">
        <input
          className="search-bar"
          spellCheck="false"
          autoComplete="off"
          name="query"
          placeholder="Search"
          type="text"
          onChange={updateQuery}
        />
      </div>
    </div>
    <nav className="header-logged-nav">
      <ul className="nav-list-logged">
        <li className="nav-element-logged"><a href="#settings" className="settings-link">Settings</a></li>
        <li className="nav-element-logged last-logged"><a href="#logout" className="logout-link">Logout</a></li>
      </ul>
    </nav>
  </header>
);

HeaderLogged.propTypes = {
  updateQuery : PropTypes.func.isRequired,
};

export default HeaderLogged;
