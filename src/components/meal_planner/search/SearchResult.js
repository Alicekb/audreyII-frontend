import React, { Component } from 'react';
import Meal from '../Meal';

const infoStyle = {
  backgroundColor: 'white',
  height: '93.5%',
}

export default class SearchResult extends Component {
  render() {
    return (
      <div className='column ui fluid container stackable' style={infoStyle}>
        <Meal name={'Sunday Supper: Jerk Half-Chickens'}/>
        <Meal name={'Roasted Chickens With Lemon And Orange'}/>
        <Meal name={'Sage Pesto Roasted Chicken'}/>
        <Meal name={'Classic Roast Chicken Recipe'}/>
        <Meal name={'Chicken Broth Elixir'}/>
        <Meal name={'Mustard-Crusted Roast Chickens'}/>
      </div>
    );
  }
}