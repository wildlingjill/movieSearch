import React from 'react';
import SearchBar from './components/searchBar';
import SelectedMoviesList from './components/selectedMoviesList';
import './App.css';

export default class App extends React.Component {
  static displayName = 'App';

  constructor() {
    super();

    this.state = {
      selectedMovies: [],
    };
  }

  onSelect = (movie) => {
    const {selectedMovies} = this.state;
    const alreadyExists = selectedMovies.filter((mov) => mov.imdbID === movie.imdbID);

    if (selectedMovies.length < 1 || alreadyExists.length < 1) {
      this.setState((prevState) => ({selectedMovies: [...prevState.selectedMovies, movie]}));
    }
  };

  onDelete = (id) => {
    const {selectedMovies} = this.state;

    const newMovies = selectedMovies.filter((movie) => movie.imdbID !== id);

    this.setState({selectedMovies: newMovies});
  };

  render = () => {
    const {selectedMovies} = this.state;

    return (
      <div className="App">
        <h1>Movie Search</h1>
        <SearchBar onSelect={this.onSelect} />
        <SelectedMoviesList selectedMovies={selectedMovies} onDelete={this.onDelete} />
      </div>
    );
  };
};