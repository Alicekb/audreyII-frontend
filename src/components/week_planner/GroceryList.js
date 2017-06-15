import React from 'react';
import shortid from 'shortid';

const GroceryList = (props) => (
   <div className='row grocery-list printing-grocery'>
      <div className='ui five column grid container' style={{background: '#fff'}}>
        <h2><u>Groceries</u></h2>
        { props.ingredients.map((ingredients, index) => {
          return <ul key={shortid.generate()} className='column'>
            { ingredients.map((ingredient)=> {
                return <li key={shortid.generate()}>{ingredient}</li>
            })}
          </ul>
        })}
      </div>
  </div>
)

export default GroceryList