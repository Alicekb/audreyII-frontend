import React, { Component } from 'react';
import Ingredient from './Ingredient';

const ingredientBox = {
  margin: '10',
  backgroundColor: '#F2D492',
  padding: '30px 80px 30px 80px',
  display: 'inline-block',
  height: '200',
  overflow: 'hidden'
};

export default class IngredientList extends Component {
  render() {
    return(
      <div style={ingredientBox}>
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
        <Ingredient />
      </div>
    );
  }
}