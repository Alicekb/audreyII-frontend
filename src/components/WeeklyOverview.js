import React, { Component } from 'react';
import Day from './Day';

export default class WeeklyOverview extends Component {
  render() {
    return (
      <div className='ui row'>
        <div className='ui divided container seven column grid stackable'>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </div>
      </div>
    );
  }
}