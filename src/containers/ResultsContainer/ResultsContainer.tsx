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
  lastVisitTime:any
}
interface IResults{
  results:any;
}
// TODO: add number of page etc...

const ResultsContainer: React.FC<IResults> = (results) => {
  const resultMatches: Array<IResult> = [];
  if (!results.results) {
    return (
      <div>
       No results...
      </div>
    );
  }
  results.results.forEach((e: any) => {
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
              />
            </div>
          </main>
        ))
      }
    </>
  );
};

ResultsContainer.propTypes = {
  results : PropTypes.array.isRequired,
};

export default ResultsContainer;
