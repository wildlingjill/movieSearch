import React from 'react';
import PropTypes from 'prop-types';

const SelectedMoviesList = ({selectedMovies, onDelete}) => (
  <ul className='selected-movies-list'>
    {selectedMovies.map((movie) => (
      <li className='selected-movie' key={movie.imdbID}>
        {movie.Title} <button onClick={() => onDelete(movie.imdbID)}>x</button>
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