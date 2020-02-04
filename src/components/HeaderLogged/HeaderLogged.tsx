import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import searchIcon from '../../assets/search-icon.svg';
import clearIcon from '../../assets/exit-icon.svg';
import UserMenu from '../UserMenu/UserMenu';

import './HeaderLogged.css';

interface SearchProps {
  updateQuery: any;
  clearQuery: any;
  query:string;
  userAvatar:any;
}

const HeaderLogged: React.FC<SearchProps> = ({
  updateQuery,clearQuery,query,userAvatar,
}) => (
  <header className="header-logged">
    <div className="logo-container-logged">
      <Link to="/search">
        <span className="logo-logged">nevermark</span>
      </Link>
    </div>
    <div className="search-bar-container">
      <div className="search-icon-container">
        <img src={searchIcon} alt="Search Icon" className="search-icon" />
      </div>
      <div className="search-input-container">
        <input
          autoFocus
          className="search-bar"
          spellCheck="false"
          autoComplete="off"
          name="query"
          placeholder="Search"
          type="text"
          value={query}
          onChange={updateQuery}
        />
        <button className="x-button" type="submit" onClick={clearQuery}>
          <span role="img" aria-label="clear search" className={query === undefined || (query && query.length >= 1) ? 'x see' : 'x not'}>
            <img src={clearIcon} alt="Clear Input" className="clear-icon" />
          </span>
        </button>
      </div>
    </div>
    <nav className="header-logged-nav">
      <ul className="nav-list-logged">
        <li className="nav-element-logged">

          <UserMenu userAvatar={userAvatar} />

        </li>
      </ul>
    </nav>
  </header>
);

HeaderLogged.propTypes = {
  updateQuery : PropTypes.func.isRequired,
  clearQuery : PropTypes.func.isRequired,
  userAvatar : PropTypes.any,
};

export default HeaderLogged;
