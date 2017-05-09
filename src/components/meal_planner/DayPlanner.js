import React, { Component } from 'react';

import VerticalMenu from '../nav/VerticalMenu';
import Date from '../Date';
import MealPlanner from './MealPlanner';

export default class DayPlanner extends Component {
  render() {
    return (
      <div>
        <VerticalMenu />
        <div className='ui center aligned grid'>
              <Date />
              <MealPlanner />
        </div>
      </div>
    );
  }
}

