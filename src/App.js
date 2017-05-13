import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Week from './components/Week_Planner/Week';
import DayPlanner from './components/Meal_planner/DayPlanner'
import Calendar from './components/Calendar/Calendar';
import Welcome from './components/Main/Welcome';
import Home from './components/Main/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/week' component={Week} />
          <Route path='/planner' component={DayPlanner} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/loggedin' component={Welcome} />
        </Switch>
      </div>
    );
  }
}

export default App;

