import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {

  const movieNodes = props.data.map(movie => {
    return (
      <Movie
        titleOfMovie={movie.filmTitle}
        key={movie.id}
        showTimeOfMovie={movie.filmShowTime}
        >
        </Movie>
      )
    })

  return (
    <div className="movie-list">
      {movieNodes}
      </div>
    )
}

export default MovieList;
