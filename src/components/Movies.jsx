//components
import CardMovie from "./CardMovie";
import { FaBeer } from "react-icons/fa"

const Movies = ({data}) => {
  console.log(data)
  return (
        (data.length != 0)
          ?(
            <ul className="row border border-blue">
              {data.map((movie) => (
                <li key={movie.imdbID} className="border border-black list-style-none col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                  <CardMovie data={movie}/>
                </li>
              ))}
            </ul>
          ): (
            ("no results")
          )
  );
}

export default Movies;
