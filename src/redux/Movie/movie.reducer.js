import {
	ADD_MOVIE,
	DELETE_MOVIE,
	EDITING_MOVIE,
	SELECT_MOVIE,
	UPDATE_MOVIE,
	SEARCH_MOVIE
} from './movie.types';
import movieData from '../../data/movieData';

const INITIAL_STATE = {
	movieList: movieData,
	updating: false,
	selectedMovie: {},
	filteredMovieList: movieData,
	searching: '',
	searchQuery: ''
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			return Object.assign({}, state, {
				movieList: state.movieList.concat(action.payload)
			});
		case DELETE_MOVIE:
			return Object.assign({}, state, {
				movieList: state.movieList.filter(movie => movie.id !== action.payload)
			});
		case EDITING_MOVIE:
			return Object.assign({}, state, {
				editing: action.payload
			});
		case SELECT_MOVIE:
			return Object.assign({}, state, {
				selectedMovie: action.payload
			});
		case UPDATE_MOVIE:
			return Object.assign({}, state, {
				movieList: state.movieList.map(movie => movie.id === action.payload.id ? action.payload : movie)
			});
		case SEARCH_MOVIE:
			return Object.assign({}, state, {
				filteredMovieList: action.payload
			});
		default:
			return state;
	}
}

export default reducer;