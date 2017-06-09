import React, { Component } from 'react';

import audreyApi from '../../api/AudreyApi';
import shortid from 'shortid';

import MealList from './MealList';
import InfoCard from './InfoCard';
import Search from './Search';

export default class MealPlanner extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
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
    this.setState({
      infoCard: {
        ingredients: ingredients,
        calories: calories,
        recipe: recipe 
      }  
    })
  }

  render() {
    const { ingredients, calories, recipe } = this.state.infoCard
    const ingredientsArray = ingredients.map((ingredient) => {
        return <li className='column' key={shortid.generate()} style={{padding: 0}}> {ingredient} </li>
      })

    return (
      <div className='ui center aligned grid'>
        <h1>{this.props.name}</h1>
        <div className='ui grid container stackable'>
          <div className='two column row'>
            <div className='ui column grid container'>
              <MealList meals={this.state.meals} />
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