import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Calendar from './components/calendar/Calendar';
import DayPlanner from './components/meal_planner/DayPlanner'
import VerticalMenu from './components/nav/VerticalMenu';

class App extends Component {
  render() {
    return (
      <div>
        <VerticalMenu />
        <Switch>
          <Route path='/calendar' component={Calendar} />
          <Route path='/planner' component={DayPlanner} />
        </Switch>
      </div>
    );
  }
}

export default App;

