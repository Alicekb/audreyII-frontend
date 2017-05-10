import React, { Component } from 'react';

import Login from './Login';
import Signup from './Signup';

const homeStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export default class Home extends Component {
  render() {
    return (
      <div className='ui container grid center aligned' style={homeStyle}>
        <div className='ui divided two column row'>
          <div className='ui column' style={{background: '#fff', padding: '2em'}}>
            <h1>Audrey II</h1>
            <p>Yummy java main course salt sustainable.
              Main course grocery shopping yummy lovely fruit dish cookie
              custard quinoa healthy pub luncheon. Salt lunch sushi
              dinner delicious marinate bread flavor farm herbes butter.
              Butter main course organic ingredients liquor chopsticks
              sustainable biological sous-chef bartender wine sweet broil simmer.
              Gluten free fruit quinoa fresh organic locally grown scent bistro tasty.
              Recommendations gluten free blender. Wholesome authentic cuisine gastronome
              vegetables al dente yummy cookie relish mustard fresh etiquette chopsticks.
              Sour bar sustainable cuisine liquor bon appetit heating broil consumer
              chocolate carrots main course.</p>
          </div>

          <div className='ui column' style={{background: '#fff', padding: '2em'}}>
            <Signup />        
          </div>
        </div>
      </div>
   );
  }
}