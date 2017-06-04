import React from 'react';
import { Link } from 'react-router-dom';

const boxStyle = {
  backgroundColor: '#fff'
}

const boxContainer = {
  transform: 'translateY(25%)',
  
  padding: '1em',
  background: '#fff'
}

const Main = ({ name }) => (
  <div>
    <div className='ui center aligned grid container ' style={boxContainer}>
      <h1 className='row'>Welcome, {name}!</h1>
      <div className='divided two column row stackable'>
        <div className='column' style={boxStyle}>
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
        </div>
        <div className='column' style={boxStyle}>
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
      </div>
    </div>

      <Link to='/calendar' className='ui fluid container'>
        <button className='ui fluid button'>Start</button>
      </Link>

    </div>
  </div>
);

export default Main;