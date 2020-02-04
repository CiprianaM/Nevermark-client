import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

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
  updateResults: any;
  numResults: number;
  took: number;
}
// TODO: add number of page etc...

const ResultsContainer: React.FC<IResults> = ({
  results,updateResults,numResults,took,error,
}) => {
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

  if (results.error) {
    return (
      <main className="results-container">
        <div className="no-results-elements-container" />
      </main>
    );
  }
  results.forEach((e: any) => {
    resultMatches.push(e);
  });
  // text={result.text}
  return (
    <>
      <InfiniteScroll
        dataLength={results.length}
        next={updateResults}
        hasMore
        loader={<div className="loading" />}
      >
        <main className="results-container">
          <div className="num-results">
            <h3 className="number-of-results">{`About ${numResults} results retrieved in ${took} miliseconds`}</h3>
          </div>
          {
            resultMatches.map((result: IResult) => (
              // key={result.createdAt}
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
            ))
          }
        </main>
      </InfiniteScroll>
    </>
  );
};

ResultsContainer.propTypes = {
  results : PropTypes.any,
  updateResults : PropTypes.func.isRequired,
  numResults : PropTypes.number.isRequired,
  took : PropTypes.number.isRequired,
};

export default ResultsContainer;
