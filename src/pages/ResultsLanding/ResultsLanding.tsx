import React,{ useState } from 'react';
import {
  BrowserRouter as Router,useLocation,
} from 'react-router-dom';

import Header from '../../components/Header/Header';
import Filters from '../../components/Filters/Filters';
import './ResultsLanding.css';
import ResultsContainer from '../../containers/ResultsContainer/ResultsContainer';

const ResultsLanding: React.FC = () => {
  const [query,setQuery] = useState('');

  const searchQuery: string = useLocation().search.slice(1);

  return (
    <>
      <Header query={searchQuery || ''} />
      <Filters />
      <ResultsContainer query={searchQuery || ''} />
    </>
  );
};

export default ResultsLanding;
