import React from 'react';
import './App.css';
import MovieContainer from './components/movieContainer';

export default class App extends React.Component {
  static displayName = 'App';

  constructor() {
    super();

    // array of movies selected 
    this.state = {
      selectedMovies: [],
    };
  }

  // called when a movie is selected from the list displayed in <SearchBar>
  onSelect = (movie) => {
    const {selectedMovies} = this.state;

    // filters array for any movies that already match the selected movie, so it's not added twice
    const alreadyExists = selectedMovies.filter((mov) => mov.imdbID === movie.imdbID);

    // if there are no existing movies that match, add it to the existing array in state
    if (alreadyExists.length < 1) {
      this.setState((prevState) => ({selectedMovies: [...prevState.selectedMovies, movie]}));
    }
  };

  // takes an imdb ID to delete the movie from the state array
  onDelete = (id) => {
    const {selectedMovies} = this.state;

    // filters out all movies that do not match the movie to delete, saves as a new array in state
    const newMovies = selectedMovies.filter((movie) => movie.imdbID !== id);

    this.setState({selectedMovies: newMovies});
  };

  render = () => {
    const {selectedMovies} = this.state;

    return (
      <div className="App">
        <h1>Movie Search</h1>
        <MovieContainer selectedMovies={selectedMovies} onSelect={this.onSelect} onDelete={this.onDelete} />
      </div>
    );
  };
};