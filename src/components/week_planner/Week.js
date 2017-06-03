import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchWeek, resetWeek } from '../../actions/week';
import shortid from 'shortid';

import Date from '../Date';
import GroceryList from './GroceryList';
import Day from './Day';

class Week extends Component {
  componentDidMount() {
    this.props.fetchWeek(this.props.location.state.id, localStorage.getItem('token'))
  }

  componentWillUnmount() {
    this.props.resetWeek()
  }

  chunkArray(array, chunk_size){
    let newArray = array.slice(0)
    let results = [];
    while (newArray.length) {
        results.push(newArray.splice(0, chunk_size));
    }
    return results;
  }

  render() {
    const days = this.props.daysArray.map((day) => {
      return <Day 
        key={shortid.generate()}
        id={day.id}
        name={day.day_name}
      />
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
                <Link to='/calendar'><button className='ui fluid button'>Back</button></Link>
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