import React from 'react'
import {Grid, Segment, Container, Header, Button, List } from 'semantic-ui-react'

const infoStyle = {
  backgroundColor: '#fff',
  paddingLeft: '.7em'
}

const InfoCard = ({ name, ingredients, calories, recipe, removable, handleDelete }) => (
    <Segment>
      <Grid style={{padding: '1em'}}>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as='h3' floated='left'>Ingredients List:</Header>
          </Grid.Column>
            { removable ? 
              <Grid.Column>
                <Button
                  floated='right'
                  onClick={() => handleDelete(name)}
                >Delete
                </Button> 
              </Grid.Column>
              : (null)
            }
        </Grid.Row>
      
        <Grid.Row>
          <List celled horizontal>
            {ingredients}
          </List>
        </Grid.Row>

        <Grid.Row style={{padding: 0}}>
          <List horizontal>
            <Header as='h3' floated='left'>Calories:</Header>
            <List.Item>{calories}</List.Item>
          </List>
        </Grid.Row>
        
        <Grid.Row style={{padding: 0}}>
          <List>
            <Header as='h3' floated='left'>Recipe URL:</Header>
            <List.Item>
              { recipe !== '' ?
              <a href={recipe} target='_blank' rel="noopener noreferrer">
                {recipe}
              </a> : (null)
              }
            </List.Item >
          </List>  
        </Grid.Row>
      </Grid>
    </Segment>
)

export default InfoCard;