import React from 'react';
import PropTypes from 'prop-types';

/**
 * allows a user to search a movie via the OMDB API, returns results for user to select
 * takes an onSelect prop from parent component to call when a result is selected
 */
export default class SearchBar extends React.Component {
  static displayName = 'Search Bar';

  static propTypes = {
    onSelect: PropTypes.func,
    onSearch: PropTypes.func,
    searchTerm: PropTypes.string
  };

  static defaultProps = {
    onSelect: () => {},
    onSearch: () => {},
  };

  render = () => <input className="search-bar" type='text' value={ this.props.searchTerm } onChange={(event) => this.props.onSearch(event.target.value)} />;
}