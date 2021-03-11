import React from 'react';
import './Movie.css';
import { MovieCard } from '../../components';
import { useSelector } from 'react-redux';

const MovieList = () => {
	const movies = useSelector((state) => state.movie.filteredMovieList);
	return (
		<>
			{
				movies.length > 0 ? (
					movies.map(movie => {										
						return (																											
							<MovieCard movie={movie} key={movie.id}/>
						)
					})

				) : (
					<div className="row" key="0">
						<h5>Not found movie.</h5>
					</div>
				)
			}
		</>
	)
}

export default MovieList;