import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Week from './components/Week_planner/Week'
import DayPlanner from './components/Meal_planner/DayPlanner'
import Calendar from './components/Calendar/Calendar';
import Welcome from './components/Main/Welcome';
import Home from './components/Main/Home';
import { tokenSignup } from './actions/auth';


class App extends Component {
  static propTypes = { 
    tokenSignup: PropTypes.func
  }

  componentDidMount() {
    const token = localStorage.getItem('token')

    if (!!token) {
      this.props.tokenSignup(token)
    }
  }
  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' render={() => (
              this.props.isAuthenticated ? (
                <Redirect to='/welcome' />
              ) : (
                <Home />
              )
            )}/>
            <Route path='/week' component={Week} />
            <Route path='/planner' component={DayPlanner} />
            <Route path='/calendar' component={Calendar} />
            <Route exact path='/welcome' render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/' />
              ) : (
                <Welcome />
              )
            )}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { tokenSignup })(App);

