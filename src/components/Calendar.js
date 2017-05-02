import React, { Component } from 'react';
import Date from './Date';
import WeeklyOverview from './WeeklyOverview';
import GroceryList from './GroceryList';

const calendarCss = {
  marginTop: '1.5em',
}

export default class Calendar extends Component {
  render() {
    return (
      <div className='ui center aligned grid' style={calendarCss}>
        <Date />
        <WeeklyOverview />
        <GroceryList />
      </div>
    );
  }
}