import React from 'react';

import './ResultsContainer.css';

import Result from '../../components/Result/Result';
import fakeData from './fakeData';

interface SearchProps {
  query: string;
}
// interface IResult {
//   userId: number;
//   domain: string;
//   url: string;
//   fullUrl: string;
//   fullTitle: string;
//   text: string;
//   createdAt: string;
//   timeSpent: number;
// }

const ResultsContainer: React.FC<SearchProps> = ({ query }) => {
  const resultMatches: Array<Object> = [];
  fakeData.forEach((e:any) => {
    e.url.includes(query) && resultMatches.push(e);
  });
  const results = resultMatches.map((result: any,i: number) => (
    <main className="results-container">
      <div className="results-elements-container">
        <Result
          key={i}
          fullurl={result.fullUrl}
          fulltitle={result.fullTitle}
          text={result.text}
          timespent={result.timeSpent}
        />
      </div>
    </main>
  ));

  return (
    <>
      {results}
    </>
  );
};

export default ResultsContainer;
