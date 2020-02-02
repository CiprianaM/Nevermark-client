const fetchUserHistory:Function = async (search:String = '',options:any) => {
  const SERVER_URL:string = 'http://localhost:3000';
  const DEFAULT_ROUTE = '/';
  try {
    const res = await fetch(
      SERVER_URL + DEFAULT_ROUTE + search,
    );

    // )
    //   .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    //   .then((res) => {
    //     console.log(`from fetch ${res.json()}`);
    //     return res;
    //   });
    return res;
  } catch (e) {
    const err = await (e.text ? e.text() : e);

    return { error : err + search };
  }
};

export { fetchUserHistory };
