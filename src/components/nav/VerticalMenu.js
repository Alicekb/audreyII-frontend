import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  paddingLeft: '1.5em',
  marginTop: '1.5em'
}

const VerticalMenu = () => (
  <div className='ui vertical menu' style={{float: 'left', width: '8%'}}>
    <div style={navStyle}>
      <h4><Link to='/calendar' classname='item'>Calendar</Link></h4>
      <h4><Link to='/planner' classname='item'>Planner</Link></h4>
    </div>
  </div>
);

export default VerticalMenu;