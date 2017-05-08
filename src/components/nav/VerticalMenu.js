import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  paddingLeft: '1.5em',
  marginTop: '1em'
}

const navContainerStyle = {
 float: 'left',
 width: '8%',
 marginTop: '1em',
 background: '#fff'
}

const VerticalMenu = () => (
  <div className='ui vertical menu' style={navContainerStyle}>
    <div style={navStyle}>
      <h4><Link to='/week' classname='item'>Week</Link></h4>
      <h4><Link to='/planner' classname='item'>Planner</Link></h4>
    </div>
  </div>
);

export default VerticalMenu;