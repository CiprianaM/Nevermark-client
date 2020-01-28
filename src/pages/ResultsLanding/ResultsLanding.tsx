import React,{ useState } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderLogged from '../../components/HeaderLogged/HeaderLogged';
import Filters from '../../components/Filters/Filters';
import './ResultsLanding.css';
import ResultsContainer from '../../containers/ResultsContainer/ResultsContainer';

const ResultsLanding: React.FC = () => {
  const [query,setQuery] = useState(useLocation().search.slice(1));

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <HeaderLogged updateQuery={updateQuery} />
      <Filters />
      <ResultsContainer query={query} />
    </>
  );
};

export default ResultsLanding;
