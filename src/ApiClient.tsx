const fetchUserHistory:Function = async (search:String = '',pageNumber:any = '1') => {
  const SERVER_URL:string = 'http://localhost:3000';
  const DEFAULT_ROUTE = search ? 'search' : 'nosearch';
  try {
    // console.log(`${SERVER_URL + DEFAULT_ROUTE + search}/${String(pageNumber)}`);
    let fetchUrl = `${SERVER_URL}/${DEFAULT_ROUTE}`;
    if (search)fetchUrl += `/${search.trim()}`;
    fetchUrl += `/${String(pageNumber)}`;
    console.log(fetchUrl);
    const res = await fetch(
      fetchUrl,
      {
        method : 'GET',
        cache : 'no-cache',

        credentials : 'include',
        // referrerPolicy : 'origin-when-cross-origin', // no-referrer, *client
        // localhost/search/searchterm/page
        // localhost/nosearch/page
      },
    );

    // )
    //   .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    //   .then((res) => {
    //     console.log(`from fetch ${res.json()}`);
    //     return res;
    //   });
    console.log(res);
    return res;
  } catch (e) {
    const err = await (e.text ? e.text() : e);

    return { error : err + search };
  }
};

export { fetchUserHistory };
