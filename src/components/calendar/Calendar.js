import React, { Component } from 'react';

import Date from '../Date';
import Month from './Month';

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <div className='ui center aligned grid'>
          <Date />
          <div className='ui divided four column container grid stackable'>
            <Month name={'January'} />
            <Month name={'February'} />
            <Month name={'March'} />
            <Month name={'April'} />
            <Month name={'May'} />
          </div>
        </div>
      </div>
    )
  }
}