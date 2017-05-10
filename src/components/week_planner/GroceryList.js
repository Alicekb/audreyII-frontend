import React, { Component } from 'react';
import IngredientList from './IngredientList';

export default class GroceryList extends Component {
  render() {
    return (
      <div className='ui row'>
        <div className='ui divided three column grid stackable container' style={{background: '#fff'}}>
          <h2><u>Groceries</u></h2>
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