import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Date from '../Date';
import WeeklyOverview from './WeeklyOverview';
import GroceryList from './GroceryList';

export default class Calendar extends Component {
  render() {
    if (!this.props.location.state) {
      return <Redirect to='/' push/>
    }

    return (
      <div>
        <div className='ui center aligned grid container '>
          <Date week={this.props.location.state.id } year={this.props.location.state.year}/>
          <div className='ui grid'>
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
      </div>      
    );
  }
}
