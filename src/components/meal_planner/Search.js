import React, { Component } from 'react';
import SearchBar from './search/SearchBar';
import SearchResult from './search/SearchResult';

const searchStyle = {
  backgroundColor: 'grey',
  height: '100%'
}

export default class Search extends Component {
  render() {
    return (
      <div className='two wide column grid' style={searchStyle}>
        <SearchBar />
        <SearchResult />
      </div>
    );
  }
}