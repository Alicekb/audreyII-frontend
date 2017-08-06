import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Segment, Container, Button } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { fetchWeek, resetWeek } from '../../actions/week'
import shortid from 'shortid'

import Date from '../Date'
import GroceryList from './GroceryList'
import Day from './Day'

class Week extends Component {
  componentDidMount() {
    this.props.fetchWeek(
      this.props.location.state.id,
      'http://localhost:3001/v1/weeks/',
      localStorage.getItem('token')
    )
  }

  componentWillUnmount() {
    this.props.resetWeek()
  }

  chunkArray(array, chunk_size) {
    let newArray = array.slice(0)
    let results = []
    while (newArray.length) {
      results.push(newArray.splice(0, chunk_size))
    }
    return results
  }

  render() {
    const days = this.props.daysArray.map(day => {
      return <Day key={shortid.generate()} id={day.id} name={day.day_name} />
    })
    const ingredientsArray = this.chunkArray(this.props.ingredients, 5)

    return (
      <Container>
        <Segment>
          <Grid textAlign="center">
            <Date
              week={this.props.location.state.id}
              year={this.props.location.state.year}
            />
            <Grid.Row className="printing-days">
              <Grid stackable columns={7}>
                {days}
              </Grid>
            </Grid.Row>
            <GroceryList ingredients={ingredientsArray} />

            <Grid.Row columns={2} className="printing-display">
              <Grid.Column>
                <Button fluid color="green" onClick={() => window.print()}>
                  Print Page
                </Button>
              </Grid.Column>

              <Grid.Column>
                <Button fluid color="grey" onClick={this.props.history.goBack}>
                  Back
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    daysArray: state.week.daysArray,
    meals: state.week.meals,
    ingredients: state.week.ingredients
  }
}

export default withRouter(
  connect(mapStateToProps, { fetchWeek, resetWeek })(Week)
)
