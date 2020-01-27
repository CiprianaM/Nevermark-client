import React,{ useState } from 'react';
import {
  BrowserRouter as Router,Route,useLocation,Switch,Link,
} from 'react-router-dom';

import Header from '../../components/Header/Header';
import Filters from '../../components/Filters/Filters';
import './ResultsLanding.css';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

interface ISearchResult {
  fullUrl: string;
  createdAt: string;
  fullTitle: string;
  timeSpent: number;
}

const ResultsLanding: React.FC = () => {
  // const [numberResults, setNumberResults] = useState(0);

  const searchQuery: any = useLocation().search.match(/[a-z]+/g);

  return (
    <>
      <Header query={searchQuery[0]} />
      <Filters />
      <ResultsContainer query={searchQuery[0]} />
    </>
  );
};

export default ResultsLanding;
