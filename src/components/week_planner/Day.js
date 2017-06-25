import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react'

const Day = ({name, id}) => (
  <Link to={`/week/${name}/${id}`}
    className='column box'>
      <Header as='h3'>{name}</Header>
  </Link>
);

export default Day;