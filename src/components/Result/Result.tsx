/* eslint-disable react/no-danger-with-children */
import React from 'react';
import PropTypes from 'prop-types';

import MenuButton from '../MenuButton/MenuButton';
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
  deleteDomain: any;
}
// {`${Math.round(totalTimeSpent / 1000)} minutes.`}
const Result: React.FC<MatchProps> = ({
  url,pageTitle,protocol,shortUrl,domain,lastVisitTime,pageText,totalVisits, deleteDomain
}) => {
  const options = [
    'Delete Domain',
    'Delete Record',
  ];
  const title = pageTitle.length > 80 ? `${pageTitle.slice(0,89)}...` : pageTitle;
  return (
    <div className="result-container">
      <div className="title-timespent-container">
        <h3 className="result-title">
          <a href={`${protocol}://${url}`}>
            <img className="favicon" src={`${protocol}://${domain}/favicon.ico`} />
            <span dangerouslySetInnerHTML={{ __html : title }} />
          </a>
        </h3>
      <MenuButton options={options} deleteDomain={deleteDomain} domain={domain}/>
      </div>
      <div className="result-text-container">
      <div className="result-text" dangerouslySetInnerHTML={{ __html : pageText }}/>
        <span className="timespent">{lastVisitTime}</span>

      </div>

      <div className="last-row">
        <a href={`${protocol}://${url}`} className="result-url" target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        <h4 className="num-visits timespent">{`${totalVisits}${totalVisits === 1 ? ' visit' : ' visits'}`}</h4>
      </div>
    </div>
  );
};

Result.propTypes = {
  url : PropTypes.string.isRequired,
  shortUrl : PropTypes.string.isRequired,
  pageTitle : PropTypes.any.isRequired,
  protocol : PropTypes.string.isRequired,
  domain : PropTypes.string.isRequired,
  totalTimeSpent : PropTypes.number.isRequired,
  totalVisits : PropTypes.number.isRequired,
  lastVisitTime : PropTypes.any.isRequired,
  pageText : PropTypes.any.isRequired,
};

export default Result;
