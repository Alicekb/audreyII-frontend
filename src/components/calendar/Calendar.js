import React, { Component } from 'react'
import {Grid, Segment, Header, Container, Button } from 'semantic-ui-react'
import audreyApi from '../../api/AudreyApi'
import shortid from 'shortid'

import Date from '../Date';
import { Redirect } from 'react-router-dom';

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
      this.state.weeks.map((id, index) => {
        return <Button
          size='medium'
          style={{backgroundColor: '#fff'}}
          key={shortid.generate()} 
          onClick={() => { this.handleClick(id)}}
        >
          <Header as='h3'>
            Week {index + 1}
          </Header>
        </Button>
      })

    return (
      <Container>
        <Segment textAlign='center'>
          <Date year={this.state.year} style={{marginBottom: '1em'}}/>
          <Grid divided columns={4} style={{marginTop: 0}}>
            {weeks}
          </Grid>
        </Segment>
      </Container>
    )
  }
}


