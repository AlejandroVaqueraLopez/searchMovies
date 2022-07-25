const CardMovie = ({ data:{ Poster, Title, Type, Year } }) => {
  return (
    <div className="card bg-dark my-5">
      <img src={Poster} className="card-img-top" alt="" />
      <div className="card-body text-white">
        <h5 className="card-title line-clamp">{Title}</h5>
        <h6 className="card-text">{Type}</h6>
        <h6 className="card-text">{Year}</h6>
      </div>
    </div>
  );
}

export default CardMovie;
