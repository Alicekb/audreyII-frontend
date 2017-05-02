import React, { Component } from 'react';
import IngredientList from './IngredientList';

const groceryBox = {
  marginTop: '30',
  width: '800',
};

export default class GroceryList extends Component {
  render() {
    return (
      <div style={groceryBox}>
        <IngredientList />
        <IngredientList />
        <IngredientList />
        <IngredientList />
        <IngredientList />
        <IngredientList />
      </div>
    );
  }
}