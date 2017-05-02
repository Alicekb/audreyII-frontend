import React, { Component } from 'react';
import Date from './Date';
import WeeklyOverview from './WeeklyOverview';
import GroceryList from './GroceryList';

const calendarAlign = {
  float: 'right',
  marginRight: '20',
  textAlign: 'center'
}

export default class Calendar extends Component {
  render() {
    return (
      <div style={calendarAlign}>
        <Date />
        <WeeklyOverview />
        <GroceryList />
      </div>
    );
  }
}