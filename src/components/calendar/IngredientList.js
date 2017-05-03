import React, { Component } from 'react';
import Ingredient from './Ingredient';

export default class IngredientList extends Component {
  render() {
    return(
      <div className='column box'>
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </div>
    );
  }
}