import React, { Component } from 'react';

import audreyApi from '../../api/AudreyApi';
import shortid from 'shortid';

import Meal from './Meal';
import InfoCard from './InfoCard';
import Search from './Search';

const mealStyle = {
  padding: '1em',
  backgroundColor: '#fff',
  height: '50%',
  marginBottom: '.5em'
}

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
      return results.push(
        <Meal key={shortid.generate()} name={meal.name} disabled={false}/>
      )
    })
    while (results.length < 5) {
      results.push(
       <Meal key={shortid.generate()} name={'EMPTY'} disabled={true}/>
      )
    }
    return results
  }

  render() {
    const meals = this.mealArray(this.state.meals)

    return (
      <div className='ui center aligned grid'>
        <h1>{this.props.name}</h1>
        <div className='ui grid container stackable'>
          <div className='two column row'>
            <div className='ui column grid container'>
              <div className='row container' style={mealStyle}>
                { meals }
              </div>
              <InfoCard />
            </div>
            <div className='column'>
              <Search />
            </div>
          </div>

          <div className='two column row'>
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