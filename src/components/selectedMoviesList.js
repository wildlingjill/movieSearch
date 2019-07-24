import React from 'react';
import PropTypes from 'prop-types';

/**
 * takes an array of selected movies and an onDelete function
 * returns an inline list of movies, each with a button to delete
 * I couldn't figure out how to display the selected movies inline in <SearchBar> whilst also allowing user input so I made this component to display the list below the search bar
 * I'd like to take more time to figure out how to display this inline
 */
const SelectedMoviesList = ({selectedMovies, onDelete}) => (
  <ul className='selected-movies-list'>
    {selectedMovies.map((movie) => (
      <li className='selected-movie' key={movie.imdbID}>
        <span>{movie.Title} </span><button onClick={() => onDelete(movie.imdbID)}>×</button>
      </li>
    ))}
  </ul>
);

SelectedMoviesList.propTypes = {
  selectedMovies: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

SelectedMoviesList.defaultProps = {
  selectedMovies: [],
  onDelete: () => {},
};

export default SelectedMoviesList;