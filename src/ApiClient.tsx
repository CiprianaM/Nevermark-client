const FETCH_OPTIONS:any = {
  method : 'GET',
  cache : 'no-cache',
  credentials : 'include',
};
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchUser:Function = async () => {
  try {
    const res = await fetch(`${SERVER_URL}/me`,FETCH_OPTIONS);
    if (res.status > 200) {
      return { error : 'unauthorized' };
    }
    return res;
  } catch (e) {
    const err = await (e.text ? e.text() : e);
    return { error : err };
  }
};

const fetchUserHistory:Function = async (search:String = '',pageNumber:any = '1') => {
  try {
    const DEFAULT_ROUTE = search ? 'search' : 'nosearch';
    let fetchUrl = `${SERVER_URL}/${DEFAULT_ROUTE}`;
    if (search)fetchUrl += `/${search.trim()}`;
    fetchUrl += `/${String(pageNumber)}`;
    console.log(fetchUrl, 'this is', FETCH_OPTIONS, 'these are ')
    const res = await fetch(fetchUrl,FETCH_OPTIONS);
    return res;
  } catch (e) {
    const err = await (e.text ? e.text() : e);

    return { error : err + search };
  }
};

const fetchUserDomainHistory:Function = async (domain:String = '') => {
  try {
    const DEFAULT_ROUTE = 'domain';
    const fetchOpt:any = {
      cache : 'no-cache',
      credentials : 'include',
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({domain})
    }
    let fetchUrl = `${SERVER_URL}/${DEFAULT_ROUTE}`;
    const res = await fetch(fetchUrl, fetchOpt);
    return res;
  } catch (e) {
    const err = await (e.text ? e.text() : e);

    return { error : err };
  }
};
const deleteOneRecord:Function = async (url:String = '') => {
  try {
    console.log(url, 'url from ClientApi');
    const DEFAULT_ROUTE = '';
    const fetchOpt:any = {
      cache : 'no-cache',
      credentials : 'include',
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({url})
    }
    let fetchUrl = `${SERVER_URL}/${DEFAULT_ROUTE}`;
    const res = await fetch(fetchUrl, fetchOpt);
    return res;
  } catch (e) {
    const err = await (e.text ? e.text() : e);

    return { error : err };
  }
};

export { fetchUserHistory,fetchUser, fetchUserDomainHistory, deleteOneRecord };
