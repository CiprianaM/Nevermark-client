import React from 'react';

import './Filters.css';

const Filters: React.FC = () => (
  <div className="filters-container">
    <div className="filter-elements-container">
      <div className="filter-button">Dates</div>
      <div className="filter-button">Tags</div>
    </div>
  </div>
);

export default Filters;
