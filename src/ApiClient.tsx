const FETCH_OPTIONS:{} = {
  method : 'GET',
  cache : 'no-cache',
  credentials : 'include',
};
const SERVER_URL:string = 'http://localhost:3000';

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
    const res = await fetch(fetchUrl,FETCH_OPTIONS);
    return res;
  } catch (e) {
    const err = await (e.text ? e.text() : e);

    return { error : err + search };
  }
};

export { fetchUserHistory,fetchUser };
