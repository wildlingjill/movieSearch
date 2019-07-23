import React from 'react';

export default class SearchBar extends React.Component {
  static displayName = 'Search Bar';

  constructor() {
    super();

    this.state = {
      apiKey: '2acc9fd5',
      results: [],
      selectedMovies: [],
    };
  }

  onSearch = (value) => {
    if (typeof(value) !== 'string') {
      throw new Error('Must provide a string to search');
    }
    if (value.length >= 3) {
      const {apiKey} = this.state;
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

  render = () => {
    const {results, selectedMovies} = this.state;

    return (
      <>
        <input type='text' onChange={(event) => this.onSearch(event.target.value)} />
        <ul>
          {results.map((res) => (
            <li key={res.imdbID}>
              <p>{res.Title}</p>
              <p>{res.Year}</p>
            </li>
          ))}
        </ul>
      </>
    );
  };
}