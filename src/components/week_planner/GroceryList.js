import React from 'react';

const GroceryList = (props) => (
   <div className='row'>
      <div className='ui divided four column grid container' style={{background: '#fff'}}>
        <h2><u>Groceries</u></h2>
        {
          props.ingredients.map((ingredients) => {
          return <ul className='column'>
            {ingredients.map((ingredient) => {
              return <li>{ingredient}</li>
            })}
          </ul>
          })
        }
      </div>
  </div>
)

export default GroceryList