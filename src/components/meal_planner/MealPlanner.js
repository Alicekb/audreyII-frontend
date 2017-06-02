import React, { Component } from 'react';

import MealList from './MealList';
import InfoCard from './InfoCard';
import Search from './Search';
import Date from '../Date'

export default class MealPlanner extends Component {
  render() {
    return (
      <div className='ui center aligned grid'>
        <Date year="2017" />
        <div className='ui grid container stackable'>
          <div className='two column row' style={{paddingBottom: '0'}}>
            <div className='ui column grid container'>
              <MealList />
              <InfoCard />
            </div>
            <div className='column'>
              <Search />
            </div>
          </div>

          <div className='two column row' style={{paddingTop: '0'}}>
            <div className='column'>
              <button className='ui fluid button'>Save</button>
            </div>
            <div className='column'>
              <button className='ui fluid button'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}