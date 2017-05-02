import React, { Component } from 'react';
import IngredientList from './IngredientList';

export default class GroceryList extends Component {
  render() {
    return (
      <div className='column row'>
        <div className='column'>
          <IngredientList />
          <IngredientList />
          <IngredientList />
          <IngredientList />
          <IngredientList />
          <IngredientList />
        </div>
      </div>
    );
  }
}