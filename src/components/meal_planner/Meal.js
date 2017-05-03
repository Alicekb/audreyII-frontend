import React from 'react';


const Meal = ({name}) => (
  /*<div className='ui segment'>
    <h3>{name}</h3>
  </div>*/
  <button className='ui fluid button'>{name}</button>
)

export default Meal;