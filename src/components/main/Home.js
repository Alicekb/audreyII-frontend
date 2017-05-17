import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';
import SignupForm from './SignupForm';

import logo from './logo.svg';

const homeStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: false
    }
  }

  onClick(e) {
    e.preventDefault()
    let showForm = !this.state.loginForm

    this.setState({
      loginForm: showForm
    });
  }

  render() {
    return (
      <div className='ui grid container center aligned' style={homeStyle}>
        <div className='ui divided two column row'>
          <div className='ui column' style={{background: '#fff', padding: '2em'}}>
            <img src={logo} className="ui fluid tiny centered image" alt="logo" />
            <h1 style={{marginTop: 0}}>Audrey II</h1>
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
            {this.state.loginForm === true ? (
              <span>
                <Login />
                <button 
                  type='button' 
                  className='ui button' 
                  style={{background: 'none'}}
                  onClick={ this.onClick.bind(this) }
                >
                  Signup instead
                </button>
              </span>
            ) : (
              <span>
               <SignupForm />
                <button 
                  type='button' 
                  className='ui button'
                  style={{background: 'none'}} 
                  onClick={ this.onClick.bind(this) }
                >
                  Login instead
                </button>
              </span>
            )}  
          </div>
        </div>
      </div>
   );
  }
}