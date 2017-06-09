import React, { Component } from 'react';

import audreyApi from '../../api/AudreyApi';
import shortid from 'shortid';
import { mealType } from '../Types';
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
      meals: [],
      infoCard: {
        ingredients: ['EMPTY'],
        calories: 'EMPTY',
        recipe: 'EMPTY' 
      } 
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

  handleInfo = (meal) => {
    const { ingredients, calories, recipe } = meal
    debugger
    this.setState({
      infoCard: {
        ingredients: ingredients,
        calories: calories,
        recipe: recipe 
      }  
    })
  }

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
       <Meal key={shortid.generate()} name={'EMPTY'} disabled={true}/>
      )
    }
    return results
  }

  render() {
    const { ingredients, calories, recipe } = this.state.infoCard
    const mealsArray = this.mealArray(this.state.meals)
    const ingredientsArray = ingredients.map((ingredient) => {
        return <li className='column' key={shortid.generate()} style={{padding: 0}}> {ingredient} </li>
      })

    return (
      <div className='ui center aligned grid'>
        <h1>{this.props.name}</h1>
        <div className='ui grid container stackable'>
          <div className='two column row'>
            <div className='ui column grid container'>
              <div className='row container' style={mealStyle}>
                { mealsArray }
              </div>
              <InfoCard 
                ingredients={ingredientsArray} 
                calories={calories} 
                recipe={recipe}
              />
            </div>
            <div className='column'>
              <Search handleInfo={(meal) => this.handleInfo(meal)}/>
            </div>
          </div>

          <div className='two column row' style={{paddingTop: 0}}>
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