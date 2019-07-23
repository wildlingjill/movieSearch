import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  static displayName = 'Search Bar';

  static propTypes = {
    onSelect: PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      apiKey: '2acc9fd5',
      results: [],
      searching: false,
    };
  }

  onSearch = (value) => {
    if (typeof(value) !== 'string') {
      throw new Error('Must provide a string to search');
    }
    if (value.length >= 3) {
      const {apiKey} = this.state;
      this.setState({searching: true});

      fetch(`http://www.omdbapi.com/?s=*${value}*&type=movie&apikey=${apiKey}`,
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

  onDelete = (id) => {};

  onSelect = (movie) => {
    this.props.onSelect(movie);
    this.setState({searching: false});
  };

  render = () => {
    const {results, searching} = this.state;

    return (
      <>
        <input className="search-bar" type='text' onChange={(event) => this.onSearch(event.target.value)} />
        <ul className="result-list">
          {searching ? results.map((res) => (
            <li key={res.imdbID} className="result-item">
              <button onClick={() => this.onSelect(res)}>
                <p>{res.Title}</p>
                <p>{res.Year}</p>
              </button>
            </li>
          ))
         : ''}
        </ul>
      </>
    );
  };
}