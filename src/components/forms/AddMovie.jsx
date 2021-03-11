import React from 'react'
import serialize from 'form-serialize';
import './AddMovie.css';
import { addMovie } from '../../redux/Movie/movie.actions';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddMovie = () => {
  const dispatch = useDispatch();

  function handleFormSubmit(event) {
    event.preventDefault();
    const newMovie = serialize(event.target, {hash: true});
    newMovie['id'] = uuidv4();
    dispatch(addMovie(newMovie));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h5>Add Movie</h5>
      <div className="row">
        <div className="three columns">
          <label>Name</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="name" />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Rating</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="rating" />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Image Url</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="imageUrl" />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Overview</label>
        </div>
        <div className="nine columns">
          <textarea className="u-full-width" placeholder="Movie is ..." name="overview" ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <p></p>
        </div>
        <div className="nine columns">
          <button className="button-primary add-btn" type="submit">ADD MOVIE</button>
        </div>
      </div>
    </form>
  )
}

export default AddMovie;