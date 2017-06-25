import React from 'react';
import shortid from 'shortid';
import {Grid, Header, List} from 'semantic-ui-react'

const GroceryList = ( { ingredients }) => (
   <Grid.Row className='printing-grocery'>
      <Grid stackable columns={5} style={{background: '#fff'}}>
        <Header as='h2'><u>Groceries</u></Header>
        { ingredients.map((ingredients, index) => {
          return <List
            celled
            key={shortid.generate()}
            className='column grocery-list'
          >
            { ingredients.map((ingredient)=> {
                return <List.Item
                  key={shortid.generate()}
                  className='printing-li'
                  >
                    {ingredient}
                </List.Item>
            })}
          </List>
        })}
      </Grid>
  </Grid.Row>
)

export default GroceryList