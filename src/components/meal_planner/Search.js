import React, { Component } from 'react';

import Meal from './Meal';

const infoStyle = {
  backgroundColor: 'white',
  height: '93.5%',
  padding: '1em',
}

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="ui fluid input">
          <input type="text" placeholder="Search..." />
          <button className='ui button'>Search</button>
        </div>
        <div className='ui column' style={infoStyle}>
          <Meal name={'Sunday Supper: Jerk Half-Chickens'}/>
          <Meal name={'Roasted Chickens With Lemon And Orange'}/>
          <Meal name={'Sage Pesto Roasted Chicken'}/>
          <Meal name={'Classic Roast Chicken Recipe'}/>
          <Meal name={'Chicken Broth Elixir'}/>
          <Meal name={'Mustard-Crusted Roast Chickens'}/>
          <Meal name={'Sunday Supper: Jerk Half-Chickens'}/>
          <Meal name={'Roasted Chickens With Lemon And Orange'}/>
          <Meal name={'Sage Pesto Roasted Chicken'}/>
          <Meal name={'Classic Roast Chicken Recipe'}/>
          <Meal name={'Chicken Broth Elixir'}/>
          <Meal name={'Mustard-Crusted Roast Chickens'}/>
          <Meal name={'Sunday Supper: Jerk Half-Chickens'}/>
          <Meal name={'Classic Roast Chicken Recipe'}/>
        </div>
      </div>
    );
  }
}