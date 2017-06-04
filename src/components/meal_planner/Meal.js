import React from 'react';
import classNames from 'classnames';

const Meal = ({name, disabled}) => (
  <button 
    className={ classNames('ui fluid button', {'disabled': disabled})}
  >
    {name}
  </button>
)

export default Meal;