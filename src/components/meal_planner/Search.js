import React, { Component } from 'react';
import SearchBar from './Search/SearchBar';
import SearchResult from './Search/SearchResult';

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