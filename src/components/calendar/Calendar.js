import React, { Component } from 'react';
import audreyApi from '../../api/AudreyApi';
import shortid from 'shortid';

import Date from '../Date';
import { Redirect } from 'react-router-dom';

const buttonStyle = {
  backgroundColor: '#fff',
  border: 0
}

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      weeks: [],
      redirect: false,
      weekId: 0
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    return audreyApi.getData(this.props.id, 'http://localhost:3001/v1/calendars/', localStorage.getItem('token'))
      .then(res => {
        if (res === undefined) {
          return null
        }
        this.getCalendar(res)
    })
  }

  getCalendar(calendar) {
    let weeksArray = []
    calendar.weeks.forEach((week) => {
      weeksArray.push(week.id)
    })
    this.setState({
      year: calendar.year,
      weeks: weeksArray
    })
  }

  handleClick(id) {
    this.setState({
      redirect: true,
      weekId: id
    })
  }

  render() {
    if (!!this.state.redirect) {
      return <Redirect push to={{
        pathname: '/week',
        state: {id: this.state.weekId , year: this.state.year}  
      }}/>
    }

    const weeks = 
      this.state.weeks.map((id) => {
        return <button 
          type="button" 
          className='column text vertical center' 
          style={buttonStyle} 
          key={shortid.generate()} 
          onClick={() => { this.handleClick(id)}}
        >
          <h3 style={{marginTop: 0}}>
            Week {id}
          </h3>
        </button>
      })

    return (
      <div>
        <div className='ui center aligned grid'>
          <Date year={this.state.year}/>
            <div className='ui divided four column container grid'>
              {weeks}
            </div>
        </div>
      </div>
    )
  }
}


