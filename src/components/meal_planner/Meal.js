import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react'

import { ItemTypes } from '../Types';

const mealSource = {
  beginDrag(props) {
    return {
      name: props.name,
      id: props.id,
      uri: props.uri,
      disabled: props.disabled
    }
  },
  canDrag(props, monitor) {
    if (props.disabled === true) {
      return false
    } else {
      return true
    }
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
    const {name, handleClick, connectDragSource } = this.props;
    return connectDragSource(
      <div>
        <Button fluid color='teal' onClick={handleClick} style={{border: '1px solid black'}}>
          {name}
        </Button>
      </div>
    )
  }
}

Meal.propTypes = propTypes

export default DragSource(ItemTypes.MEAL, mealSource, collect)(Meal)