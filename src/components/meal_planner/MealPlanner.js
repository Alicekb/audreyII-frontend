import React, { Component } from 'react';

import audreyApi from '../../api/AudreyApi';
import MealList from './MealList';
import InfoCard from './InfoCard';
import Search from './Search';

export default class MealPlanner extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      meals: []
    }
  }

  componentDidMount() {
    return audreyApi.getData(this.props.id,'http://localhost:3001/v1/days/',localStorage.getItem('token'))
      .then(res => {
        if (res === undefined ) {
          return null
        }
        this.setState({
          meals: res.meals
        })
      })
  }

  mealArray(meals) {
    let newArray = meals.slice(0)
    let results = []
    newArray.map((meal) => {
      return results.push(<button className='ui fluid button'>{meal.name}</button>)
    })
    while (results.length < 5) {
      results.push(<button className='ui fluid disabled button'>EMPTY</button>)
    }
    return results
  }

  render() {
    const meals = this.mealArray(this.state.meals)

    return (
      <div className='ui center aligned grid'>
        <h1>{this.props.name}</h1>
        <div className='ui grid container stackable'>
          <div className='two column row' style={{paddingBottom: '0'}}>
            <div className='ui column grid container'>
              <MealList meals={meals}/>
              <InfoCard />
            </div>
            <div className='column'>
              <Search />
            </div>
          </div>

          <div className='two column row' style={{paddingTop: '0'}}>
            <div className='column'>
              <button className='ui fluid button'>Save</button>
            </div>
            <div className='column'>
              <button className='ui fluid button'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}