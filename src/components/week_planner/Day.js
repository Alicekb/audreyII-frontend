import React from 'react';

const Day = ({name, id, handleClick }) => (
  <button type="button" className='column box' style={{border: 0}} onClick={() => handleClick(id)}> 
      <h3>{name}</h3>
  </button>
);

export default Day;