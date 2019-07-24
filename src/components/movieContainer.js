import React from 'react';
import PropTypes from 'prop-types';
import SelectedMoviesList from './selectedMoviesList';
import SearchBar from './searchBar';

export default class MovieContainer extends React.Component {
  static displayName = 'Movies Container';

  static propTypes = {
    selectedMovies: PropTypes.arrayOf(PropTypes.object),
    onDelete: PropTypes.func,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    selectedMovies: [],
    onDelete: () => {},
    onSelect: () => {},
  };

  constructor() {
    super();

    this.state = {
      results: [],
      searching: false,
      searchTerm: '',
    };
  }

  componentDidMount = () => {
    document.body.addEventListener('click', () => {
      // this.setState({searching: false});
    });
  };

  onSearch = (value) => {
    if (typeof(value) !== 'string') {
      throw new Error('Must provide a string to search');
    }
    this.setState({ searchTerm: value });
    if (value.length >= 3) {
      this.setState({searching: true});

      fetch(`http://www.omdbapi.com/?s=*${value}*&type=movie&apikey=2acc9fd5`,
        { 
          method: 'get',
        }
      )
      .then((res) => res.json()).then((data) => {
        if (data.Response === 'True') {
          this.setState({results: data.Search});
        }
      })
      .catch(console.warn);
    }
  };

  onSelect = (movie, event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(movie);
    this.setState({searching: false, searchTerm: ''});
  };


  render = () => {
    const {selectedMovies, onSelect, onDelete} = this.props;
    const {results, searching} = this.state;

    return (
      <div className="movies-container__outer">
        <SelectedMoviesList selectedMovies={selectedMovies} onDelete={onDelete} /> 
        <SearchBar onSelect={onSelect} onSearch={this.onSearch} searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} />
        {searching && <ul className="result-list">
          {results.map((res) => (
            <li key={res.imdbID} className="result-item" onClick={(event) => this.onSelect(res, event)}>
              <p className="result-item__title">{res.Title}</p>
              <p className="result-item__year">{res.Year}</p>
            </li>
          ))}
        </ul>
        }
      </div>
    );
  };
}