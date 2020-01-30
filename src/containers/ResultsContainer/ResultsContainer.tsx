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
}
interface IResults{
  results:any;
}
// TODO: add number of page etc...

const ResultsContainer: React.FC<IResults> = (results) => {
  const resultMatches: Array<IResult> = [];
  console.log(`results form resultscontainer: ${JSON.stringify(results.results)}`);
  if (!results.results) {
    return (
      <div>
       No results...
      </div>
    );
  }
  results.results.forEach((e: any) => {
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
