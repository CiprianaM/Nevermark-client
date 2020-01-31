import React,{ useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HeaderLogged from '../../components/HeaderLogged/HeaderLogged';
import Filters from '../../components/Filters/Filters';
import './ResultsLanding.css';
import ResultsContainer from '../../containers/ResultsContainer/ResultsContainer';
import { fetchUserHistory } from '../../ApiClient';

const ResultsLanding: React.FC = () => {
  const [results,setResults] = useState([]);
  const [query,setQuery] = useState(useLocation().search.slice(5));
  const [filter,setFilter] = useState(false);
  const [option,setOption] = useState('');

  const history = createBrowserHistory();
  const pathName = useLocation().pathname;
  let searchString = '';
  if (pathName !== '/search') {
    searchString = pathName.replace('/search/','');
  }
  // useEffect(() => {
  //   setQuery(searchString);
  //   fetchUserHistory(searchString)
  //     .then((res:any) => res.json())
  //     .then((res:any) => {
  //       setResults(res.results);
  //     });
  //   // setUpEvents(res);

  //   // .catch((e:any) => console.log(e));
  // }, []); //eslint-disable-line
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchString = e.target.value;
    setQuery(searchString);
    fetchUserHistory(searchString)
      .then((res:any) => res.json())
      .then((res:any) => {
        setResults(res.results);
        history.push({
          pathname : `/search/${searchString}`,

        });
      });
  };

  const toggleFilter = () => {
    if (filter) {
      setFilter(false);
      setOption('');
    } else {
      setFilter(true);
    }
  };

  const toggleOption = (e: React.MouseEvent<HTMLElement>) => {
    if (option !== e.currentTarget.id) {
      setOption(e.currentTarget.id);
    } else {
      setOption('');
    }
  };

  return (
    <>
      <HeaderLogged updateQuery={updateQuery} query={query} />
      <Filters option={option} toggleOption={toggleOption} filter={filter} toggleFilter={toggleFilter} />
      <ResultsContainer results={results} />
    </>
  );
};

export default ResultsLanding;
