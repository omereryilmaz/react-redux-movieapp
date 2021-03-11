import React from 'react'
import './AddMovie.css';
import { editingMovie, updateMovie } from '../../redux/Movie/movie.actions';
import { useDispatch, useSelector } from 'react-redux';

let selectedMovie;
const UpdateMovie = () => {
  const dispatch = useDispatch();
  selectedMovie = useSelector(state => state.movie.selectedMovie);

  const handleChange = e => {
    const { name, value } = e.target;
    selectedMovie = { ...selectedMovie, [name]: value};
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const clickedBtnName = event.nativeEvent.submitter.name;
    if (clickedBtnName === 'cancel') {
      dispatch(editingMovie(false));
    } else {
      dispatch(updateMovie(selectedMovie));
      dispatch(editingMovie(false));
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h5>Update Movie</h5>
      <div className="row">
        <div className="three columns">
          <label>Name</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="name" 
          defaultValue={selectedMovie.name} 
          onChange={handleChange} 
          />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Rating</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="rating" 
          defaultValue={selectedMovie.rating} 
          onChange={handleChange} 
          />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Image Url</label>
        </div>
        <div className="nine columns">
          <input className="u-full-width" type="text" name="imageUrl" 
          defaultValue={selectedMovie.imageUrl} 
          onChange={handleChange} 
          />
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <label>Overview</label>
        </div>
        <div className="nine columns">
          <textarea className="u-full-width" placeholder="Movie is ..." name="overview" 
          defaultValue={selectedMovie.overview}
          onChange={handleChange} 
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <p></p>
        </div>
        <div className="nine columns">
          <div className="row">
            <div className="six columns">
              <button
                className="button add-btn"
                name="cancel"
                type="submit"
              >CANCEL</button>
            </div>
            <div className="six columns">
              <button className="button-primary add-btn" type="submit">SAVE</button>
            </div>
          </div>

        </div>
      </div>
    </form>
  )
}

export default UpdateMovie;