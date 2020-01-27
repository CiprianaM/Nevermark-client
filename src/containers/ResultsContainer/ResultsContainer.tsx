import React from 'react';
import PropTypes from 'prop-types';

import './ResultsContainer.css';

import Result from '../../components/Result/Result';
import fakeData from './fakeData';

interface SearchProps {
  query: string;
}

interface IResult {
  userId: number;
  domain: string;
  url: string;
  fullUrl: string;
  fullTitle: string;
  text: string;
  createdAt: string;
  timeSpent: number;
}

const ResultsContainer: React.FC<SearchProps> = ({ query }) => {
  const resultMatches: Array<IResult> = [];
  fakeData.forEach((e: any) => {
    if (query && e.url.includes(query)) resultMatches.push(e);
  });

  return (
    <>
      {
        resultMatches.map((result: IResult) => (
          <main key={result.createdAt} className="results-container">
            <div className="results-elements-container">
              <Result
                fullurl={result.fullUrl}
                fulltitle={result.fullTitle}
                text={result.text}
                timespent={result.timeSpent}
              />
            </div>
          </main>
        ))
      }
    </>
  );
};

ResultsContainer.propTypes = {
  query : PropTypes.string.isRequired,
};

export default ResultsContainer;
