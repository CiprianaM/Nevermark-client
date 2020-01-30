import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';

interface MatchProps {
  pageTitle: string;
  url: string;
  log: any;
  totalVisits: number;
  totalTimeSpent: any;
  protocol: string;
}

const Result: React.FC<MatchProps> = ({
  url,pageTitle,totalTimeSpent,protocol,// protocol,totalVisits,
}) => (
  <div className="result-container">
    <div className="title-timespent-container">
      <h3 className="result-title">{pageTitle}</h3>
      <span className="timespent">{`${Math.round(totalTimeSpent / 1000)} minutes.`}</span>
    </div>
    <span className="result-text">put text</span>
    <a href={`${protocol}://${url}`} className="result-url" target="_blank" rel="noopener noreferrer">{url}</a>
  </div>
);

Result.propTypes = {
  url : PropTypes.string.isRequired,
  pageTitle : PropTypes.string.isRequired,
  protocol : PropTypes.string.isRequired,
  // text : PropTypes.string.isRequired,
  totalTimeSpent : PropTypes.number.isRequired,
  totalVisits : PropTypes.number.isRequired,

};

export default Result;
