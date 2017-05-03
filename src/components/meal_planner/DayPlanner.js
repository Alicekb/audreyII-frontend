import React, { Component } from 'react';
import Date from '../Date';
import MealPlanner from './MealPlanner';

export default class DayPlanner extends Component {
  render() {
    return (
      <div className='ui center aligned grid'>
        <Date />
        <MealPlanner />
      </div>
    );
  }
}