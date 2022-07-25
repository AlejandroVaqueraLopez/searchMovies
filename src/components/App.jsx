// npm 

// hooks
import { useRef } from 'react';
import useFetcher from "../components/useFetcher";
// assets

// components
import Movies from '../components/Movies';
import Loading from '../components/Loading';
 

function App () {
  const searchRef = useRef(null);

  const { data: movies, loading, error } = useFetcher();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const text = searchRef.current.value;
    //const { data } = await getMovies(text);
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
        loading ? <Loading /> : (
        <section className="py-4">
          <Movies data={ movies }/>
        </section>)
      }

    </section>
  )
}

export default App
