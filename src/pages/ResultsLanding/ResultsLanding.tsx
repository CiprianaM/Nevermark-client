import React,{ useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged';
import Filters from '../../components/Filters/Filters';
import './ResultsLanding.css';
import ResultsContainer from '../../containers/ResultsContainer/ResultsContainer';
import { fetchUserHistory,fetchUser } from '../../ApiClient';
import ModalSignUp from '../../components/ModalSignUp/ModalSignUp';

const ResultsLanding: React.FC = () => {
  const pathName = useLocation().pathname.replace('/search','').replace('/','');
  console.log('rerendering');
  const [results,setResults] = useState([]);
  const [query,setQuery] = useState(pathName);
  const [page,setPage] = useState(1);
  const [signmodal,setSignmodal] = useState(0);
  const history = createBrowserHistory();
  const showSignModal = () => {
    setSignmodal(1);
  };
  const hideSignModal = () => {
    setSignmodal(0);
  };

  const getUser = () => {
    fetchUser()
      .then((res:any) => {
        if (res.error) {
          showSignModal();
        }
        return res;
      })
      .then((res:any) => (res.error ? res : res.json()))
      .then((res:any) => {
        if (!res.error) { updateResults(); }
      });
  };

  const updateResults = (manualQuery:any = query) => {
    setQuery(manualQuery);
    setPage(1);

    fetchUserHistory(manualQuery,1)
      .then((res:any) => res.json())
      .then((res:any) => {
        setResults(res.results);
        if (res.nbPages > 1) {
          setPage(2);
        }
      }).catch((e:any) => {
        const error:any = { error : e };
        setResults(error);
      });
  };

  useEffect(() => {
    getUser();

  }, []); //eslint-disable-line

  const updateResultsFromScroll = () => {
    if (page === -1) {
      return;
    }
    fetchUserHistory(query,page)
      .then((res:any) => res.json())
      .then((res:any) => {
        setResults(results.concat(res.results));

        if (res.nbPages === page) { // we have reached the end
          setPage(-1);
        } else {
          setPage(Number(page) + 1);
        }

        history.push({
          pathname : `/search/${query}`,

        });
      }).catch((e:any) => {
        const error:any = { error : e };
        setResults(error);
      });
  };

  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    history.push({
      pathname : `/search/${e.target.value}`,
    });
    // setQuery(e.target.value);
    updateResults(e.target.value);
  };

  const clearQuery = () => {
    setQuery('');
    history.push({
      pathname : '/search/',

    });
    updateResults('');
  };

  return (
    <>
      <HeaderLogged clearQuery={clearQuery} updateQuery={updateQuery} query={query} />
      <Filters />
      <ResultsContainer updateResults={updateResultsFromScroll} results={results} />
      <ModalSignUp show={signmodal} handleSignClose={hideSignModal} />
    </>
  );
};

export default ResultsLanding;
