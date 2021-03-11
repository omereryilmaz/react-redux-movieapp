import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Movies.css';
import { deleteMovie, editingMovie, selectMovie } from "../../redux/Movie/movie.actions";


const Movies = () => {
  const movies = useSelector((state) => state.movie.movieList);
  const dispatch = useDispatch();

  const editMovie = movie => {
    dispatch(editingMovie(true));
    dispatch(selectMovie(movie));
  }

  return (
    <div>
      <h5>Movie List</h5>
      <table className="u-full-width movie-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.length > 0 ? (
              movies.map(movie => {
                const { id, name, rating } = movie;
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{rating}</td>
                    <td>
                      <button
                        className="action-btn"
                        onClick={() => editMovie(movie)}
                      >UPDATE</button>
                      <button
                        className="action-btn"
                        onClick={() => dispatch(deleteMovie(id))}
                      >Delete</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>No movies found</td>
              </tr>
            )
          }
        </tbody>
      </table >
    </div >
  )
}

export default Movies;
