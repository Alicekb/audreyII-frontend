import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Week from './components/week_planner/Week';
import DayPlanner from './components/meal_planner/DayPlanner'
import VerticalMenu from './components/nav/VerticalMenu';
import Calendar from './components/calendar/Calendar';
import Main from './components/home/Main';

class App extends Component {
  render() {
    return (
      <div>
        <VerticalMenu />
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/week' component={Week} />
          <Route path='/planner' component={DayPlanner} />
          <Route path='/calendar' component={Calendar} />
        </Switch>
      </div>
    );
  }
}

export default App;

