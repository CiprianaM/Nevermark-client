const fetchUserHistory:Function = async (path:String = '',options:any) => {
  const SERVER_URL:string = 'http://192.168.1.136:3000';
  const DEFAULT_ROUTE = '';
  try {
    const res = await fetch(
      SERVER_URL + DEFAULT_ROUTE,
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

    return { error : err + path };
  }
};

export { fetchUserHistory };
