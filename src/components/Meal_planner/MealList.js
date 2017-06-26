import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { Grid, Segment } from 'semantic-ui-react'
import { ItemTypes } from '../Types'
import PropTypes from 'prop-types'

const mealStyle = {
  padding: '1em',
  backgroundColor: '#fff',
  height: '40%',
  marginBottom: '.5em'
}

const mealTarget = {
  canDrop(props, monitor) {
    const arrayLength = props.mealsLength
    if (arrayLength < 5) {
      return true
    }
  },
  drop(props, monitor, Component) {
    const item = monitor.getItem()
    props.handleUpdate(item)
  }
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
      <div>
        <Segment>
          <Grid.Row>
            {meals}
          </Grid.Row>
        </Segment>
      </div>
    )
  }
}

MealList.propTypes = propTypes

export default DropTarget(ItemTypes.MEAL, mealTarget, collect)(MealList)