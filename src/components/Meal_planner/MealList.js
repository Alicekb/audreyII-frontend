import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../Types';
import PropTypes from 'prop-types';

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
  render(){
    const { meals, connectDropTarget } = this.props
    return connectDropTarget(
      <div className='row container' style={mealStyle}>
        {meals}
      </div>
    )
  }
}

MealList.propTypes = propTypes

export default DropTarget(ItemTypes.MEAL, {}, collect)(MealList)