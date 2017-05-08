import React, { Component } from 'react';
import MealList from './MealList';
import InfoCard from './InfoCard';
import Search from './Search';

export default class MealPlanner extends Component {
  render() {
    return (
      <div>
        <div className='ui container grid planner stackable'>
          <div className='two column row' style={{paddingBottom: '0'}}>
            <div className='column ui container grid'>
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