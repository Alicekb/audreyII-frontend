import React, { Component } from 'react';
import IngredientList from './IngredientList';

export default class GroceryList extends Component {
  render() {
    return (
      <div className='row'>
        <div className='ui divided three column stackable grid container' style={{background: '#fff'}}>
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