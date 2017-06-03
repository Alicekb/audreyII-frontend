import React from 'react';

const mealStyle = {
  padding: '1em',
  backgroundColor: '#fff',
  height: '50%',
  marginBottom: '.5em'
}

const MealList = ({ meals }) => (
  <div className='row container' style={mealStyle}>
    { meals }
  </div>
)

export default MealList;