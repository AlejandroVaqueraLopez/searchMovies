//dependencies
import { Routes, Route, Outlet} from 'react-router-dom';

//components
import Navbar from "./components/Navbar";
import App from "./components/App";
import MovieDetails from "./components/MovieDetails";

const Paths = () => {
    return (
        <section className="container">
            <Navbar />
            <Routes>
                <Route path='/' element={<p>Home</p>}/>

                <Route path='/movies' element={<Outlet />}>
                    <Route index element={<App />}/>
                    <Route path=':movieId' element={<MovieDetails />}/>
                </Route>

                <Route path='/2' element={<p>2</p>}/>
                <Route path='/3' element={<p>3</p>}/>
            </Routes>
        </section>
    );
}

export default Paths;
