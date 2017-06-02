import React from 'react';
import { Link } from 'react-router-dom';

const Day = ({name, id}) => (
  <Link to={`/week/planner/${id}`} className='column box'>
      <h3>{name}</h3>
  </Link>
);

export default Day;