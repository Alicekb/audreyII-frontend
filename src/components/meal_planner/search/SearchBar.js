import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="ui fluid input">
        <input type="text" placeholder="Search..." />
        <button className='ui button'>Search</button>
      </div>
    );
  }
}