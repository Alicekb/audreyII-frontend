import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import RenderField from './RenderField.js';
import validate from './Validate';

import { signup } from '../../../actions/auth';

class SignupForm extends Component {

  render() {
    const {handleSubmit, pristine, reset, submitting, invalid} = this.props
    return (
      <form
        className='ui form fluid left aligned container'
        style={{padding: '2em', color: '#83B692'}}
        onSubmit={handleSubmit(
          data => {signup(data)}
        )}
      >
        <div>
          <label>Username</label>
          <div>
            <Field
              name="username"
              type="text"
              component={RenderField}
            />
          </div>
        </div>

        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              type="email"
              component={RenderField}
            />
          </div>
        </div>

        <div>
          <label>Password</label>
          <div>
            <Field
              name="password"
              type="password"
              component={RenderField}
            />
          </div>
        </div>

        <div>
          <label>Password Confirmation</label>
          <div>
            <Field
              name="password_confirmation"
              type="password"
              component={RenderField}
            />
          </div>
        </div>
        
        <div>
          <button type="submit" disabled={pristine || submitting || invalid}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

SignupForm = reduxForm({
  form: 'signup',
  validate
})(SignupForm)

export default SignupForm

