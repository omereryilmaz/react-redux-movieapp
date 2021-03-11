import React from 'react';
import { MovieList, MovieListFiltered } from '../../components';
import { useSelector } from 'react-redux';

const Movie = () => {
	const searching = useSelector((state) => state.movie.searching);

	return (
		(searching) ? 
			(
				<MovieListFiltered />
			):(
				<MovieList />
			)
	)
}

export default Movie;