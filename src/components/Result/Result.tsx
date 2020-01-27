import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';

interface MatchProps {
  fullurl: string;
  fulltitle: string;
  text: string;
  timespent: number;
}

const Result: React.FC<MatchProps> = ({
  fullurl,fulltitle,text,timespent,
}) => (
  <div className="result-container">
    <div className="title-timespent-container">
      <h3 className="result-title">{fulltitle}</h3>
      <span className="timespent">{`You spent ${Math.round(timespent / 1000)} minutes.`}</span>
    </div>
    <span className="result-text">{text}</span>
    <a href={fullurl} className="result-url" target="_blank" rel="noopener noreferrer">{fullurl}</a>
  </div>
);

Result.propTypes = {
  fullurl : PropTypes.string.isRequired,
  fulltitle : PropTypes.string.isRequired,
  text : PropTypes.string.isRequired,
  timespent : PropTypes.number.isRequired,
};

export default Result;
