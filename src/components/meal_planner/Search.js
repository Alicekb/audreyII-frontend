import React, { Component } from 'react'
import shortid from 'shortid'

import ReactScrollbar from 'react-scrollbar-js'
import Meal from './Meal'
import Loader from 'halogen/BeatLoader'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  onChange = (ev) => {
    this.setState({
      search: ev.target.value
    })
  }

  onSubmit = (ev) => {
    ev.preventDefault()
    return this.props.requestMeals(this.state.search)
  }

  handleClick = (uri) => {
    this.props.searchMeal(uri)
      .then(res => {
        this.props.handleInfo(res)
      })
  }

  render() {
    const { searchResults, searchLoading } = this.props
    const meals = searchResults.map((meal) => {
      return <Meal 
        key={shortid.generate()}
        name={meal.name}
        uri={meal.uri}
        disabled={false}
        handleClick={() => this.handleClick(meal.uri)}/>
    })
    return (
      <div>
        <div className="ui fluid input">
          <input type="text" placeholder="Search..." onChange={this.onChange}/>
          <button className='ui button' onClick={this.onSubmit}>Search</button>
        </div>
        <ReactScrollbar style={{width: '100%', height: 500, backgroundColor: '#fff', padding: '5px'}}>
          <div className='should-have-a-children scroll-me'>
            <div className='ui fluid button disabled' style={{background: '#fff'}}>
              <Loader color="#5D995D" size="16px" margin="14px" />
            </div>

            {meals}
          </div>
        </ReactScrollbar>
      </div>
    );
  }
}