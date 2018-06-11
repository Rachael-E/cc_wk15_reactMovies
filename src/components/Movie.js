import React from 'react';

const Movie = (props) => {

  return (
    <div className="movie">
      <h4 className="movie-title">
        {props.titleOfMovie}
      </h4>
      {props.showTimeOfMovie}
    </div>
  )
}


export default Movie;
