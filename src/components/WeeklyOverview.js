import React, { Component } from 'react';
import Day from './Day';

export default class WeeklyOverview extends Component {
  render() {
    return (
      <div>
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    );
  }
}