/* eslint-disable react/no-danger-with-children */
import React from 'react';
import PropTypes from 'prop-types';

import './Result.css';

interface MatchProps {
  pageTitle: any;
  url: string;
  log: any;
  totalVisits: number;
  lastVisitTime:any;
  totalTimeSpent: any;
  protocol: string;
  shortUrl:string;
  domain:string;
  pageText:string;
}
// {`${Math.round(totalTimeSpent / 1000)} minutes.`}
const Result: React.FC<MatchProps> = ({
  url,pageTitle,protocol,shortUrl,domain,lastVisitTime,pageText,// protocol,totalVisits,
}) => (
  <div className="result-container">
    <div className="title-timespent-container">
      <h3 className="result-title">
        <a href={`${protocol}://${url}`}>
          <img className="favicon" src={`${protocol}://${domain}/favicon.ico`} />
          <span dangerouslySetInnerHTML={{ __html : pageTitle }} />
        </a>
      </h3>
      <span className="timespent">{lastVisitTime}</span>
    </div>
    <div className="result-text" dangerouslySetInnerHTML={{ __html : pageText }} />
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
  lastVisitTime : PropTypes.any.isRequired,
  pageText : PropTypes.any.isRequired,
};

export default Result;
