//hooks
import { useState, useEffect } from 'react';
//native functions
import { getMovies, getMovie  } from "../utils/getMovies";

const useFetcher = (query, callback) => {
  const [response, setResponse] = useState([]);//this will save the movie array
  const [loading, setLoading] = useState(true);//loading status

  const getData = async () => {
    const search = await callback(query);
    console.log(search);

    setResponse(search);

    setLoading(false);//true or false, the spiner must stop
  }

  //useEffect
  useEffect(() => {
    getData();
  }, [query]);

  return {response, loading};
}

export default useFetcher;
