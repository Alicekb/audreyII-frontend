import React, { Component } from 'react';
import IngredientList from './IngredientList';

export default class GroceryList extends Component {
  render() {
    return (
      <div className='ui row'>
        <div className='ui divided three column grid stackable container '>
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