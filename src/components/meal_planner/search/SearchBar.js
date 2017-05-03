import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
        <div className="ui input container">
          <input type="text" placeholder="Chicken..." />
          <button className='ui button'>Search</button>
        </div>
    );
  }
}