import React from 'react';

const Signin = () => (
  <form className='ui form fluid container' style={{padding: '2em', color: '#83B692'}}>
    <div className='field'>
      <label>Email:</label>
      <input placeholder='audrey2@fake.com' />
    </div>
    
    <div className='field'>
      <label>Password</label>
      <input type='password'/>
    </div>
    <button type='submit' className='ui button'>Login</button>
  </form>
);

export default Signin;