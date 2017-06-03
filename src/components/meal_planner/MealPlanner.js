import React, { Component } from 'react';

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
    this.setState({
      meals: [
        {
          id: 1,
          name: 'Super Speed',
          recipe: 'http://www.speedforce.com',
          ingredients: 'speedforce, lightning, chemicals'
        },
        {
          id: 1,
          name: 'Gadgets',
          recipe: 'http://www.batman.com',
          ingredients: 'money, more money, lots and lots of money'
        },
        {
          id: 1,
          name: 'Chicken Pot Pie',
          recipe: 'http://www.getthechicken.com',
          ingredients: 'carrots, pie, chicken, sause, potatoes'
        },
        {
          id: 1,
          name: 'Godlike',
          recipe: 'http://www.kyrpton.com',
          ingredients: 'yellow sunlight, kyrptonian cells'
        }
      ]
    });  
  }



  render() {
    const { meals } = this.state
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