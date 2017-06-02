import React from 'react';
import { Link } from 'react-router-dom';

const Day = ({name, id}) => (
  <Link className='column box' to={`/week/planner/${id}`} > 
    <h3>{name}</h3> 
  </Link>
);

export default Day;