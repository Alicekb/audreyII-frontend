import React, { Component } from 'react';
import Date from './Date';
import WeeklyOverview from './WeeklyOverview';
import GroceryList from './GroceryList';

export default class Calendar extends Component {
  render() {
    return (
      <div className='ui vertically divided grid'>
        <Date />
        <WeeklyOverview />
        <GroceryList />
      </div>
    );
  }
}