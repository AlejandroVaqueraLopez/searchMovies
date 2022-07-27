// hooks
import { useRef, useState } from 'react';
import useFetcher from "../components/useFetcher";//custom hook

// components
import Movies from '../components/Movies';
import Loading from '../components/Loading';

//native functions
import { getMovies } from '../utils/getMovies';
 
function App () {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('avengers');

  const { response, loading } = useFetcher(query, getMovies);

  //when search input is submited
  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchInput = searchRef.current.value;
    setQuery(searchInput);

    e.target.reset();
  }

  return (
    <section className='container border border-white my-5'>
      <h4 className="text-center fw-bold">Movie searcher</h4>

      <form className="form d-flex" action="" onSubmit={ handleSubmit }>
        <div className="input-group">
          <input ref={ searchRef } className="form-control" type="search" placeholder="search by ..." />
        </div>
        <button className="btn btn-primary br-none" type="submit">Search</button>
      </form> 

      {
        loading 
          ? <Loading /> 
          : (
            <section className="py-4">
              <Movies data={ response }/>
            </section>
          )
      }

    </section>
  )
}

export default App;
