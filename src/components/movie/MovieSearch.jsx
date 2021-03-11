import React from 'react';
import { searchMovie, searchingMovie } from '../../redux/Movie/movie.actions';
import { useDispatch, useSelector } from 'react-redux';

const SearchMovie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movieList);

  const handleChange = (event) => {   
    const { value } = event.target;
    if (value !== undefined) {
      const filteredMovies = movies.filter(movie => movie.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
      dispatch(searchMovie(filteredMovies));
      dispatch(searchingMovie(true));
    } else{
      dispatch(searchMovie(movies));
      dispatch(searchingMovie(false));
    }   
  }

  return (
      <input
        className="u-full-width search"
        type="text"
        name="search"
        placeholder="Search movie"
        onChange={handleChange}
      />
  )
};

export default SearchMovie;
