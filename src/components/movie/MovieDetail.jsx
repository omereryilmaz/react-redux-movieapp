import React from 'react'
import { useSelector } from 'react-redux';
import './MovieDetail.css';

const MovieDetail = (props) => {

  const movieId = props.match.params.id;
  const movies = useSelector((state) => state.movie.movieList);
  const [movie] = movies.filter(movie => movie.id === movieId);

  return (
    <>    
        <div className="five columns image-side">
          <div className="detail-movie-card">
            <div className="detail-image">
              <img src={movie.imageUrl}
                alt={movie.name} />
            </div>
            <div className="detail-movie-rating">
              <p>
                {movie.rating}
              </p>
            </div>
          </div>
        </div>
        <div className="seven columns content-side">
          <h5 className="detail-movie-name">{movie.name}</h5>
          <p className="detail-movie-desc">{movie.overview}</p>
        </div>
    </>
  )
};

export default MovieDetail;
