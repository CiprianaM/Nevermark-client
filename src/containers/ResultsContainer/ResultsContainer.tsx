import React from 'react';
import PropTypes from 'prop-types';

import './ResultsContainer.css';

import Result from '../../components/Result/Result';
// import fakeData from './fakeData';

interface IResult {
  pageTitle: string;
  url: string;
  log: any;
  totalVisits: number;
  totalTimeSpent: any;
  protocol: string;
  domain: string;
  shortUrl:string;
  lastVisitTime:any;
  pageText:any;

}
interface IResults{
  results?:any;
  error?:any;
}
// TODO: add number of page etc...

const ResultsContainer: React.FC<IResults> = ({ results,error }) => {
  const resultMatches: Array<IResult> = [];
  if (!results || error) {
    return (
      <main className="results-container">
        <div className="no-results-elements-container">
          <h2>Error</h2>
       Please retry in a minute.
          <br />
          <div className="quiet">Or if you're a Dev, check the backend  log and repair that thing NOW !!</div>
        </div>
      </main>
    );
  }

  if (!results.length) {
    return (
      <main className="results-container">
        <div className="no-results-elements-container">
       No results for now...
        </div>
      </main>
    );
  }
  results.forEach((e: any) => {
    console.log(e);
    resultMatches.push(e);
  });
  // text={result.text}
  return (
    <>
      {
        resultMatches.map((result: IResult) => (
          // key={result.createdAt}
          <main className="results-container">
            <div className="results-elements-container">
              <Result
                url={result.url}
                pageTitle={result.pageTitle}
                log={result.log}
                totalVisits={result.totalVisits}
                totalTimeSpent={result.totalTimeSpent}
                protocol={result.protocol}
                shortUrl={result.shortUrl}
                domain={result.domain}
                lastVisitTime={result.lastVisitTime}
                pageText={result.pageText}
              />
            </div>
          </main>
        ))
      }
    </>
  );
};

ResultsContainer.propTypes = {
  results : PropTypes.any,
};

export default ResultsContainer;
