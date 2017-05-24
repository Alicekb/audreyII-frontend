import React, { Component } from 'react';
import audreyApi from '../../api/AudreyApi';

import Date from '../Date';
import Month from './Month';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: '',
      weeks: []
    };
  }

  componentDidMount() {
    const id = this.props.id
    return audreyApi.getCal(id, localStorage.getItem('token'))
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


  render() {
    return (
      <div>
        <div className='ui center aligned grid'>
          <Date year={this.state.year}/>
          <div className='ui divided four column container grid stackable'>
            <Month name={'January'} />
            <Month name={'February'} />
            <Month name={'March'} />
            <Month name={'April'} />
            <Month name={'May'} />
          </div>
        </div>
      </div>
    )
  }
}