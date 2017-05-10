import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Week from './components/week_planner/Week';
import DayPlanner from './components/meal_planner/DayPlanner'
import Calendar from './components/calendar/Calendar';
import Welcome from './components/main/Welcome';
import Home from './components/main/Home';

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

