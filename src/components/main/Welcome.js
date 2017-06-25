import React from 'react'
import {Grid, Segment, Header, Container, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Main = ({ name }) => (
  <Container style={{padding: '1em'}}>
    <Segment>
      <Header as='h1' textAlign='center'>Welcome, {name}!</Header>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <p>Gamification leverage agile development low hanging fruit learning curve hypotheses.
            Bandwidth pitch assets niche market validation innovator low hanging fruit creative stealth.
            Agile development client android monetization burn rate customer.
            Metrics ecosystem creative holy grail twitter market angel investor accelerator technology.
            User experience incubator launch party deployment client. Facebook hypotheses accelerator freemium buyer.
            Channels A/B testing branding direct mailing business-to-business gen-z ownership.
            Leverage infographic sales seed round entrepreneur deployment market.
            Sales customer bootstrapping hackathon validation network effects niche market launch party scrum
            project alpha direct mailing growth hacking entrepreneur.
            Niche market beta return on investment advisor gen-z ramen.</p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <p>Paradigm shift seed money iPad hypotheses twitter partner network analytics buyer marketing seed round.
            Startup churn rate return on investment assets infrastructure accelerator.
            Crowdfunding early adopters stock conversion analytics burn rate social proof.
            Partner network niche market advisor graphical user interface seed money channels long
            tail client validation mass market bootstrapping iPhone product management burn rate.
            Angel investor MVP innovator conversion release agile development social media branding stock.
            Vesting period innovator twitter analytics traction holy grail equity launch party.
            Startup graphical user interface long tail. Advisor focus graphical user interface business model
            canvas holy grail agile development supply chain startup prototype buyer paradigm shift.
            MVP angel investor pitch monetization long tail funding user experience market influencer
            burn rate traction pivot validation.</p>
          </Segment>
        </Grid.Column>
      </Grid>

      <Link to='/calendar'>
        <Button color='green' fluid>Start</Button>
      </Link>
    </Segment>
  </Container>
);

export default Main;