import React from 'react';
import PropTypes from 'prop-types';

import './Filters.css';

interface FiltersProps {
  filter: boolean;
  option: string;
  toggleFilter: any;
  toggleOption: any;
}
interface Date {
  id: string;
  text: string;
}

const Filters: React.FC<FiltersProps> = ({
  filter,option,toggleFilter,toggleOption,
}) => {
  const dateFilters: any = [
    { id : 'today',text : 'Today' },
    { id : 'week',text : 'This week' },
    { id : 'month',text : 'Last 30 days' },
    { id : 'three-months',text : 'Last 3 months' },
    { id : 'year',text : 'Last year' },
    { id : 'forever',text : 'Forever and always' },
  ];
  return (
    <div className="filters-container">
      <div className="filter-elements-container">
        <button type="button" id="dates" className="button-filter" onClick={toggleFilter}>
          <div className={`filter-container filter-button ${filter ? 'selected' : ''}`}>
            Dates
          </div>
        </button>
      </div>
      <div className={`dates-filter-container ${filter ? 'show' : 'not-show'}`}>
        {dateFilters.map((e:Date) => (
          <button type="button" id={`date-${e.id}`} className="button-filter " onClick={toggleOption}>
            <div className={`filter-container filter-option ${option === `date-${e.id}` ? 'option-selected' : ''}`}>
              {e.text}
            </div>
          </button>
        ))}
        <button type="button" id="date-custom" className="button-filter">
          <div className="filter-container filter-option">
            Custom
          </div>
        </button>
      </div>
    </div>
  );
};

Filters.propTypes = {
  filter : PropTypes.bool.isRequired,
  option : PropTypes.string.isRequired,
  toggleFilter : PropTypes.func.isRequired,
  toggleOption : PropTypes.func.isRequired,
};

export default Filters;
