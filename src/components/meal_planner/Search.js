import React, { Component } from 'react';
import edamunApi from '../../api/EdamunApi'

import ReactScrollbar from 'react-scrollbar-js';

import Meal from './Meal';

const infoStyle = {
  backgroundColor: 'white',
  height: '93.5%',
  padding: '1em',
}

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchResults: []
    }
  }

  onChange(ev) {
    this.setState({
      search: ev.target.value
    })
  }

  onSubmit(ev) {
    ev.preventDefault()
    return edamunApi.searchRecipes(this.state.search)
      .then(res => {
        const results = res.hits.map((meal) => {
          return {
            name: meal.recipe.label,
            uri: meal.recipe.uri
          }
        })
        this.setState({
          searchResults: results
        })
      })
  }
  
  render() {
    const { searchResults } = this.state
    const meals = searchResults.map((meal) => {
      return <Meal name={meal.name} />
    })
    return (
      <div>
        <div className="ui fluid input">
          <input type="text" placeholder="Search..." onChange={(ev) => this.onChange(ev)}/>
          <button className='ui button' onClick={(ev) => this.onSubmit(ev)}>Search</button>
        </div>
        <ReactScrollbar style={{width: '100%', height: 500, backgroundColor: '#fff'}}>
          <div className='should-have-a-children scroll-me'>
            {meals}
          </div>
        </ReactScrollbar>
        {/*<div className='ui column' style={infoStyle}>
          {meals}
        </div>*/}
      </div>
    );
  }
}