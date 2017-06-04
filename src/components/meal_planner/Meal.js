import React from 'react';
import classNames from 'classnames';

const Meal = ({name, id, disabled, handleClick}) => (
  <button 
    className={ classNames('ui fluid button', {'disabled': disabled})}
    onClick={handleClick}
  >
    {name}
  </button>
)

export default Meal;