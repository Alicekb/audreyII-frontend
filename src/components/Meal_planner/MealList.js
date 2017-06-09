import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../Types';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Meal from './Meal';

const mealStyle = {
  padding: '1em',
  backgroundColor: '#fff',
  height: '50%',
  marginBottom: '.5em'
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    itemType: monitor.getItemType()
  }
}

const propTypes = {
  connectDropTarget: PropTypes.func.isRequired
};

class MealList extends Component {
  mealArray = (meals) => {
    let newArray = meals.slice(0)
    let results = []
    newArray.map((meal) => {
      return results.push(
        <Meal 
          key={shortid.generate()}
          name={meal.name}
          disabled={false}
          handleClick={() => this.handleInfo(meal)}/>
      )
      })
      while (results.length < 5) {
        results.push(
          <button className='ui fluid button disabled' key={shortid.generate()}> EMPTY </button>
        )
      }
      return results
    }

  render(){
    const { meals, connectDropTarget } = this.props
    const mealsArray = this.mealArray(meals)
    return connectDropTarget(
      <div className='row container' style={mealStyle}>
        {mealsArray}
      </div>
    )
  }
}

MealList.propTypes = propTypes

export default DropTarget(ItemTypes.MEAL, {}, collect)(MealList)