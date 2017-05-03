import React from 'react';
import Meal from './Meal';

const mealStyle = {
  paddingLeft: '.5em',
  backgroundColor: '#fff',
  height: '50%',
  marginBottom: '.5em'
}

const MealList = () => (
  <div className='row container' style={mealStyle}>
    <Meal name={'Sunday Supper: Jerk Half-Chickens'}/>
    <Meal name={'Herbes de Provence Rotisserie Chickens'}/>
    <Meal name={'Sage Pesto Roasted Chicken'}/>
    <Meal name={'Classic Roast Chicken Recipe'}/>
    <Meal name={'Chicken Broth Elixir'}/>
    <Meal name={'Mustard-Crusted Roast Chickens'}/>
  </div>
)

export default MealList;