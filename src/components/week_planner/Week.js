import React, { Component } from 'react';

import Date from '../Date';
import WeeklyOverview from './WeeklyOverview';
import GroceryList from './GroceryList';

export default class Calendar extends Component {
  render() {
    return (
      <div className='ui center aligned grid'>
        <Date />
        <div className='ui container grid planner'>
          <WeeklyOverview />
          <GroceryList />

          <div className='two column row' style={{paddingTop: '0'}}>
            <div className='column'>
              <button className='ui fluid button'>Save</button>
            </div>
            <div className='column'>
              <button className='ui fluid button'>Print</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}