import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import {  } from 'react-router-dom';

import Week from './components/Week_planner/Week'
import DayPlanner from './components/Meal_planner/DayPlanner'
import Calendar from './components/Calendar/Calendar';
import Welcome from './components/Main/Welcome';
import Home from './components/Main/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/week' component={Week} />
            <Route path='/planner' component={DayPlanner} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/loggedin' component={Welcome} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

