import React, { Component } from 'react';

const GroceryList = () => (
   <div className='row'>
      <div className='ui divided three column stackable grid container' style={{background: '#fff'}}>
        <h2><u>Groceries</u></h2>
        <div className='column'>
          <div className='column'>
            <p>ingredient</p>
          </div>
          <div className='column'>
            <p>ingredient</p>
          </div>
          <div className='column'>
            <p>ingredient</p>
          </div>
          <div className='column'>
            <p>ingredient</p>
          </div>
        </div>
      </div>
  </div>
)

export default GroceryList