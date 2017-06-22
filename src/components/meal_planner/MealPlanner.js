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
      deleted: [],
      infoCard: {
        name: '',
        removable: false,
        ingredients: ['EMPTY'],
        calories: 'EMPTY',
        recipe: '' 
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

  handleInfo = (meal, remove) => {
    const { name, ingredients, calories, recipe } = meal
    this.setState({
      infoCard: {
        name: name,
        removable: remove,
        ingredients: ingredients,
        calories: calories,
        recipe: recipe
      }
    })
  }

  handleDelete = (name) => {
    let newArray = this.state.meals.slice()
    let deleted = this.state.deleted.slice()

    const results = newArray.filter((meal) => {
      return meal.name !== name
    })
    const deletedResult = newArray.filter((meal) => {
      return meal.name === name
    })
    deleted.push(deletedResult[0])

    this.setState({
      meals: results,
      deleted: deleted,
      infoCard: {
        name: '',
        removable: false,
        ingredients: ['EMPTY'],
        calories: 'EMPTY',
        recipe: '' 
      } 
    })
  }

  handleSave = (id, state) => {
    let newArray = state.meals.slice()
    let deleted = state.deleted.slice()

    newArray.forEach((meal) => {
      if (!meal.id) {
        audreyApi.addMeals(id, meal, localStorage.getItem('token'))
      }
    })

    deleted.forEach((meal) => {
      if (!!meal.id) {
        audreyApi.deleteMeals(meal.id, localStorage.getItem('token'))
      }
    })

    this.props.history.goBack()
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
          handleClick={() => this.handleInfo(meal, true)}
        />
      )
    })
    return results
  }

  render() {
    const { name, ingredients, calories, recipe, removable } = this.state.infoCard
    const mealsArray = this.mealArray()
    const ingredientsArray = ingredients.map((ingredient) => {
        return <li className='column' key={shortid.generate()} style={{padding: 0}}> {ingredient} </li>
      })
    return (
      <div className='ui center aligned grid'>
        <h1 className='row' style={{padding: 0}}>{this.props.name}</h1>
        <div className='ui grid container stackable'>
          <div className='two column row'>
            <div className='ui column grid container'>
              <MealList 
                meals={mealsArray} 
                mealsLength={mealsArray.length}
                handleUpdate={this.updateMealList}
              />
              <InfoCard
                handleDelete={this.handleDelete}
                name={name}
                removable={removable}
                ingredients={ingredientsArray} 
                calories={calories} 
                recipe={recipe}
              />
            </div>
            <div className='column'>
              <Search 
                handleInfo={(meal) => this.handleInfo(meal)}
                searchLoading={this.props.searchLoading}
                searchResults={this.props.searchResults}
                requestMeals={this.props.requestMeals}
              />
            </div>
          </div>

          <div className='two column row' style={{paddingTop: 0}}>
            <div className='column'>
              <button onClick={() => this.handleSave(this.props.id, this.state)} className='ui fluid button'>Save</button>
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