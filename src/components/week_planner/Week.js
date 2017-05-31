import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWeek, resetWeek } from '../../actions/week';

import Date from '../Date';
import GroceryList from './GroceryList';
import Day from './Day';

class Week extends Component {
  componentDidMount() {
    if (!this.props.location.state) return <Redirect to='/' push/>

    this.props.fetchWeek(this.props.location.state.id, localStorage.getItem('token'))
  }

  componentWillUnmount() {
    this.props.resetWeek()
  }

  chunkArray(array, chunk_size){
    var newArray = array.slice(0)
    var results = [];
    while (newArray.length) {
        results.push(newArray.splice(0, chunk_size));
    }
    return results;
  }

  render() {
    if (!this.props.location.state) return <Redirect to='/' push/>

    const days = this.props.daysArray.map((day, index) => {
      return <Day key={index} name={day.day_name}/>
    })

    const ingredientsArray = this.chunkArray(this.props.ingredients, 5)

    return (
      <div>
        <div className='ui center aligned grid container '>
          <Date week={this.props.location.state.id } year={this.props.location.state.year}/>
          <div className='ui grid'>
            <div className='ui row'>
              <div className='ui divided container seven column grid stackable'>
                {days}
              </div>
            </div>
            <GroceryList ingredients={ingredientsArray}/>

            <div className='two column row' style={{paddingTop: '0'}}>
              <div className='column'>
                <button className='ui fluid button'>Save</button>
              </div>

              <div className='column'>
                <button className='ui fluid button'>Print</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    daysArray: state.week.daysArray,
    meals: state.week.meals,
    ingredients: state.week.ingredients
  }
}

export default connect(mapStateToProps, { fetchWeek, resetWeek })(Week);