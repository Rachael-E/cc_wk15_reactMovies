import React, {Component} from 'react';
import MovieList from '../components/MovieList';

class MoviesHolder extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: [
        {id:1, filmTitle: "The Fellowship of the Ring", filmShowTime: "18.45"},
        {id:2, filmTitle: "The Two Towers", filmShowTime: "19.30"},
        {id:3, filmTitle: "The Return of the King", filmShowTime: "20.15"}
      ]
    }
    this.imdbRedirect = this.imdbRedirect.bind(this);

  }

  imdbRedirect(){
    return "www.imdb.com"
  };


  render(){
    return (
      <div className="website-title">
        <h1>{this.props.title}</h1>
        <MovieList data={this.state.data}/>
        <a className="btn" href="https://www.imdb.com">Go to IMDB</a>
      </div>
    );
  }
}



export default MoviesHolder;
