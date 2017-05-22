import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './Validations/ValidateSignup';
import RenderField from './RenderField.js';

const SignupForm = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <form
      className='ui form fluid left aligned container'
      style={{padding: '2em', color: '#83B692'}}
      onSubmit={handleSubmit}
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
            name="confirmation"
            type="password"
            component={RenderField}
          />
        </div>
      </div>
      
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signup',
  validate
})(SignupForm)