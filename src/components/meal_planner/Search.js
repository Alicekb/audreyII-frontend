import React, { Component } from 'react';
import SearchBar from './search/SearchBar';
import SearchResult from './search/SearchResult';

export default class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchResult />
      </div>
    );
  }
}