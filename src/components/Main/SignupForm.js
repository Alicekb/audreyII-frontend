import React, { Component } from 'react';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  onChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form 
        className='ui form fluid left aligned container' 
        style={{padding: '2em', color: '#83B692'}}
        onSubmit={this.onSubmit.bind(this)}
      >
        <div className='field'>
          <label>Username:</label>
          <input
            type='text' 
            placeholder='audrey2' 
            name='username'
            onChange={this.onChange.bind(this)}
          />
        </div>

        <div className='field'>
          <label>Email:</label>
          <input 
            type='text'
            placeholder='audrey2@fake.com' 
            name='email'
            onChange={this.onChange.bind(this)}
          />
        </div>
        
        <div className='field'>
          <label>Password</label>
          <input 
            type='password'
            placeholder='*************'
            name='password'
            onChange={this.onChange.bind(this)}
          />
        </div>

        <button type='submit' className='ui button'>Sign-up</button>
      </form>
    );
  }
}