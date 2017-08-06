import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  Image,
  Grid,
  Segment,
  Header,
  Container,
  Button
} from 'semantic-ui-react'
import logo from './logo.svg'

import LoginForm from './Forms/LoginForm'
import SignupForm from './Forms/SignupForm'
import { signup, login } from '../../actions/auth'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginForm: false
    }
  }

  onClick = e => {
    e.preventDefault()
    let showForm = !this.state.loginForm

    this.setState({
      loginForm: showForm
    })
  }

  handleSignup = data => {
    this.props.signup(data)
  }

  handleLogin = data => {
    this.props.login(data)
  }

  render() {
    if (!!this.props.loggedIn) {
      return <Redirect push to="/welcome" />
    }

    return (
      <Container style={{ marginTop: '5%' }}>
        <Grid stackable divided columns={2}>
          <Grid.Column>
            <Segment>
              <Image src={logo} size="tiny" centered />
              <Container>
                <Header as="h1" textAlign="center">
                  Audrey II
                </Header>
                <p>
                  Yummy java main course salt sustainable. Main course grocery
                  shopping yummy lovely fruit dish cookie custard quinoa healthy
                  pub luncheon. Salt lunch sushi dinner delicious marinate bread
                  flavor farm herbes butter. Butter main course organic
                  ingredients liquor chopsticks sustainable biological sous-chef
                  bartender wine sweet broil simmer. Gluten free fruit quinoa
                  fresh organic locally grown scent bistro tasty.
                  Recommendations gluten free blender. Wholesome authentic
                  cuisine gastronome vegetables al dente yummy cookie relish
                  mustard fresh etiquette chopsticks. Sour bar sustainable
                  cuisine liquor bon appetit heating broil consumer chocolate
                  carrots main course.
                </p>
              </Container>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            {this.state.loginForm === true
              ? <Segment>
                  <LoginForm onSubmit={this.handleLogin} />
                  <Button
                    type="button"
                    style={{ background: 'none' }}
                    onClick={this.onClick}
                  >
                    Signup instead
                  </Button>
                </Segment>
              : <Segment>
                  <SignupForm onSubmit={this.handleSignup} />
                  <Button
                    type="button"
                    style={{ background: 'none' }}
                    onClick={this.onClick}
                  >
                    Login instead
                  </Button>
                </Segment>}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default connect(undefined, { signup, login })(Home)
