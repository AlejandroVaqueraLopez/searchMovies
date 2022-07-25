import { useState,useEffect } from 'react';
import axios from "axios";

const apikey = "bf7d0c70";

const useFetcher = () => {
  const [data, setData] = useState([]);//this will save the movie array
  const [loading, setLoading] = useState(true);//loading status
  const [error, setError] = useState(null);//error at search


  //methods
  const getMovies = async ( query="batman" ) => {
    return await axios.get(`http://www.omdbapi.com/?apikey=${apikey}&s=${query}`);
  }

  const getData = async () => {
    const { data } = await getMovies();
    if(data.Response === 'False')//when you make a bad search request, this handle the error
    {
      setError(data.Error);
      setData([]);
    }else{
      setData(data.Search);
      setLoading(false);
    }
  }

  //useEffect
  useEffect(() => {
    getData();
  }, []);

  return {data, loading, error};
}

export default useFetcher;
