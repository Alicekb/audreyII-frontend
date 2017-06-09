import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { ItemTypes } from '../Types';

const mealSource = {
  beginDrag(props) {
    return {
      name: props.name,
      id: props.id,
      disabled: props.disabled
    }
  },
  endDrag(props, monitor) {
    const item = monitor.getItem()
    console.log(item)
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const propTypes = {
  name: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
}

class Meal extends Component {
  render() {
    const {name, disabled, handleClick, connectDragSource } = this.props;
    return connectDragSource(
      <button 
        className={ classNames('ui fluid button', {'disabled': disabled})}
        onClick={handleClick}
        style={{border: '1px solid black'}}
      >
        {name}
      </button>
    )
  }
}

Meal.propTypes = propTypes

export default DragSource(ItemTypes.MEAL, mealSource, collect)(Meal)