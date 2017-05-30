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

  render() {
    if (!this.props.location.state) return <Redirect to='/' push/>

    const days = this.props.daysArray.map((day, index) => {
      return <Day key={index} name={day.day_name}/>
    })
    
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
            <GroceryList />

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
    daysArray: state.week.daysArray
  }
}

export default connect(mapStateToProps, { fetchWeek, resetWeek })(Week);