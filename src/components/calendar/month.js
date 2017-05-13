import React from 'react';
import { Link } from 'react-router-dom';

const Month = ({ name }) => (
  <div className='column box'>
    <h2>{name}</h2>
    <Link to='/week/:id' className='item'>Week 1</Link><br />
    <Link to='/week/:id' className='item'>Week 2</Link><br />
    <Link to='/week/:id' className='item'>Week 3</Link><br />
    <Link to='/week/:id' className='item'>Week 4</Link><br />
  </div>
)

export default Month;