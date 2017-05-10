import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => (
  <form className='ui form fluid container' style={{padding: '2em', color: '#83B692'}}>
    <div className='field'>
      <label>Email:</label>
      <input placeholder='Email' />
    </div>
    
    <div className='field'>
      <label>Password</label>
      <input type='password'/>
    </div>

    <button type='submit' className='ui button'>Sign-up</button>
    <h4><Link to='/loggedin' classname='item'>Login instead</Link></h4>
  </form>
);

export default Signup;