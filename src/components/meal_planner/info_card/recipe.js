import React from 'react';

const Recipe = () => (
  <div className='container'>
    <h3>Ingredients List</h3>
    <ul role='list' className='ui list'>
      <li role='listitem' className='item'>1 medium-size whole chicken (about 4 lbs)</li>
      <li role='listitem' className='item'>Salt and pepper (about ¾ tsp kosher salt per lb)</li>
      <li role='listitem' className='item'>½ cup sage pesto</li>
    </ul>
    <h3>Calories</h3>
    <ul role='list' className='ui list'>
      <li role='listitem' className='item'>948.5783323955536</li>
    </ul>
    <h3>Recipe URL</h3>
    <ul role='list' className='ui list'>
      <li role='listitem' className='item'>
        <a href="http://www.epicurious.com/recipes/food/views/Dijon-and-Tarragon-Grilled-Chicken-105171" target='_blank'>
          Sunday Supper: Jerk Half-Chickens
        </a><
      /li>
    </ul>
  </div>
)

export default Recipe;