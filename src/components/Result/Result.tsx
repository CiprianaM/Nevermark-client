/* eslint-disable react/no-danger-with-children */
import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';

interface MatchProps {
  pageTitle: any;
  url: string;
  log: any;
  totalVisits: number;
  totalTimeSpent: any;
  protocol: string;
  shortUrl:string;
  domain:string;
}

const Result: React.FC<MatchProps> = ({
  url,pageTitle,totalTimeSpent,protocol,shortUrl,domain,// protocol,totalVisits,
}) => (
  <div className="result-container">
    <div className="title-timespent-container">
      <h3 className="result-title">
        <img className="favicon" src={`${protocol}://${domain}/favicon.ico`} />
        {pageTitle}

      </h3>
      <span className="timespent">{`${Math.round(totalTimeSpent / 1000)} minutes.`}</span>
    </div>
    <span className="result-text">put text</span>
    <a href={`${protocol}://${url}`} className="result-url" target="_blank" rel="noopener noreferrer">{shortUrl}</a>
  </div>
);

Result.propTypes = {
  url : PropTypes.string.isRequired,
  shortUrl : PropTypes.string.isRequired,
  pageTitle : PropTypes.any.isRequired,
  protocol : PropTypes.string.isRequired,
  domain : PropTypes.string.isRequired,
  // text : PropTypes.string.isRequired,
  totalTimeSpent : PropTypes.number.isRequired,
  totalVisits : PropTypes.number.isRequired,

};

export default Result;
