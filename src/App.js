import React, { Component } from 'react';
import Calendar from './components/calendar/Calendar';
import DayPlanner from './components/meal_planner/DayPlanner'

class App extends Component {
  render() {
    return (
      <DayPlanner />
    );
  }
}

export default App;
