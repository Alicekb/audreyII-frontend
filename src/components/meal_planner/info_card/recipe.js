import React from 'react';

const infoStyle= {
  paddingLeft: '.5em'
}

const Recipe = () => (
  <div className='container' style={infoStyle}>
    <h3>Ingredients List</h3>
    <ul className='ui list'>
      <li className='item'>1 medium-size whole chicken (about 4 lbs)</li>
      <li className='item'>Salt and pepper (about ¾ tsp kosher salt per lb)</li>
      <li className='item'>½ cup sage pesto</li>
    </ul>
    <h3>Calories</h3>
    <ul className='ui list'>
      <li className='item'>948.5783323955536</li>
    </ul>
    <h3>Recipe URL</h3>
    <ul className='ui list'>
      <li className='item'>
        <a 
          href="http://www.epicurious.com/recipes/food/views/Dijon-and-Tarragon-Grilled-Chicken-105171"
          target='_blank' 
          rel="noopener noreferrer"
        >
          Sunday Supper: Jerk Half-Chickens
        </a><
      /li>
    </ul>
  </div>
)

export default Recipe;