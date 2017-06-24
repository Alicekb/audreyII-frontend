import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'
import RenderField from './RenderField.js'
import { Form, Button, Segment } from 'semantic-ui-react'
import validate from './Validate'
import PropTypes from 'prop-types'

class SignupForm extends Component {
  static propTypes = { 
    handleSubmit: PropTypes.func 
  }

  handleSubmit(data) {
    this.props.onSubmit(data)
  }
  render() {
    const {handleSubmit, pristine, reset, submitting, invalid} = this.props
    return (
      <Form
        style={{padding: '2em', color: '#83B692'}}
        onSubmit={handleSubmit(this.handleSubmit.bind(this))}
      >
        <Form.Field>
          <Field
            label='Username:'
            name="username"
            type="text"
            component={RenderField}
          />
        </Form.Field>

        <Form.Field>
          <Field
            label='Email:'
            name="email"
            type="email"
            component={RenderField}
          />
        </Form.Field>

        <Form.Field>
          <Field
            label='Password:'
            name="password"
            type="password"
            component={RenderField}
          />
          </Form.Field>

        <Form.Field>
          <Field
            label='Password Confirmation:'
            name="password_confirmation"
            type="password"
            component={RenderField}
          />
          </Form.Field>

          <Button basic color='green' type="submit" disabled={pristine || submitting || invalid}>Submit</Button>
          <Button basic type="button" type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </Button>
      </Form>
    )
  }
}

SignupForm = reduxForm({
  form: 'signup',
  validate
})(SignupForm)

export default SignupForm

