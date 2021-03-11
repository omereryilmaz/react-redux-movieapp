import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
	const { id, name, imageUrl } = movie;
	const detailLink = "/detail/" + id;
	return (
		<div  className="movie-section"  >
			<Link to={detailLink} key={id}>
				<div className="movie-card" >
					<div className="image">
						<img src={imageUrl}
							alt={name}/>
					</div>
					<div className="movie-title">
						<h5>
							{name}
            </h5>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default MovieCard;
