import React, { Component } from 'react';
import { withRouter } from 'react-router';

import audreyApi from '../../api/AudreyApi';
import edamunApi from '../../api/EdamunApi';
import shortid from 'shortid';

import MealList from './MealList';
import InfoCard from './InfoCard';
import Search from './Search';
import Meal from './Meal';

class MealPlanner extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      meals: [],
      infoCard: {
        removable: false,
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
    this.setState({
      infoCard: {
        removable: true,
        ingredients: ingredients,
        calories: calories,
        recipe: recipe
      }
    })
  }

  updateMealList= (newMeal) => {
    edamunApi.searchMeal(newMeal.uri)
      .then(res => {
        const meal = {
          calories: res.calories,
          ingredients: res.ingredients,
          id: undefined,
          name: newMeal.name,
          recipe: res.recipe
        }
        const newMeals = this.mealArray(meal)
        this.setState({
          meals: newMeals
        })
    })
  }

  mealArray = (meal) => {
    let newArray = this.state.meals.slice()
    if (meal) {
      const unique = newArray.every((object) => { return object.name !== meal.name })
      if (unique === true) {
        newArray.push(meal)
        return newArray
      } else {
        return newArray
      }
    }
    let results = []
    newArray.map((meal) => {
      return results.push(
        <Meal 
          key={shortid.generate()}
          name={meal.name}
          disabled={true}
          handleClick={() => this.handleInfo(meal)}/>
      )
    })
    return results
  }

  render() {
    const { ingredients, calories, recipe, removable } = this.state.infoCard
    const mealsArray = this.mealArray()
    const ingredientsArray = ingredients.map((ingredient) => {
        return <li className='column' key={shortid.generate()} style={{padding: 0}}> {ingredient} </li>
      })
    return (
      <div className='ui center aligned grid'>
        <h1>{this.props.name}</h1>
        <div className='ui grid container stackable'>
          <div className='two column row'>
            <div className='ui column grid container'>
              <MealList 
                meals={mealsArray} 
                mealsLength={mealsArray.length}
                handleUpdate={this.updateMealList}
              />
              <InfoCard
                removable={removable}
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
              <button className='ui fluid button' onClick={this.props.history.goBack}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MealPlanner)