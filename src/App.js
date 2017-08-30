import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Week from './components/week_planner/Week'
import MealPlanner from './components/meal_planner/MealPlanner'
import Calendar from './components/calendar/Calendar'
import Welcome from './components/main/Welcome'
import Home from './components/main/Home'
import NoMatch from './components/nav/NoMatch'
import VerticalMenu from './components/nav/VerticalMenu'

import { tokenSignup, logout } from './actions/auth'
import { requestMeals, resetSearch } from './actions/search'

class App extends Component {
  static propTypes = {
    tokenSignup: PropTypes.func,
    loggedIn: PropTypes.func
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    fetch('https://audrey-api.herokuapp.com/').then(res => {
      if (!!token) {
        this.props.tokenSignup(token)
      }
    })
  }

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/'
              }}
            />
          )}
      />
    )
    return (
      <Router>
        <div>
          <VerticalMenu
            logout={this.props.logout}
            loggedIn={this.props.isAuthenticated}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Home loggedIn={this.props.isAuthenticated} />}
            />
            <PrivateRoute exact path="/week" component={Week} />
            <Route
              path="/week/:name/:id"
              render={({ match }) => {
                const { id, name } = match.params
                return this.props.isAuthenticated ? (
                  <MealPlanner
                    id={id}
                    name={name}
                    searchReset={this.props.resetSearch}
                    searchLoading={this.props.searchLoading}
                    searchResults={this.props.searchResults}
                    requestMeals={this.props.requestMeals}
                  />
                ) : (
                  <Redirect push to="/welcome" />
                )
              }}
            />
            <PrivateRoute
              path="/calendar"
              component={() => (
                <Calendar id={this.props.currentUser.current_calendar} />
              )}
            />
            <PrivateRoute
              path="/welcome"
              component={() => (
                <Welcome name={this.props.currentUser.username} />
              )}
            />
            <PrivateRoute component={NoMatch} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser,
    searchLoading: state.search.loading,
    searchResults: state.search.results
  }
}

export default connect(mapStateToProps, {
  tokenSignup,
  logout,
  requestMeals,
  resetSearch
})(App)
