import React,{ useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderLogged from '../../components/HeaderLogged/HeaderLogged';
import Filters from '../../components/Filters/Filters';
import './ResultsLanding.css';
import ResultsContainer from '../../containers/ResultsContainer/ResultsContainer';
import { fetchUserHistory } from '../../ApiClient';

const ResultsLanding: React.FC = () => {
  const [results,setResults] = useState([]);
  const [query,setQuery] = useState(useLocation().search.slice(5));

  useEffect(() => {
    fetchUserHistory()
      .then((res:any) => res.json())
      .then((res:any) => {
        console.log(res);
        console.log(typeof res.results);
        setResults(res.results);
      });
    // setUpEvents(res);

    // .catch((e:any) => console.log(e));
  }, []); //eslint-disable-line

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <HeaderLogged updateQuery={updateQuery} query={query} />
      <Filters />
      <ResultsContainer results={results} />
    </>
  );
};

export default ResultsLanding;
