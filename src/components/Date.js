import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

const Date = ({ week, year }) =>
  <Grid.Row>
    {!!week
      ? <Header as="h1">
          Week {week} - {year}
        </Header>
      : <Header as="h1">
          {year}
        </Header>}
  </Grid.Row>

export default Date
