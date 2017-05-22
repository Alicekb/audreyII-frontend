const validate = (values) => {
  const errors = {} // eslint-disable-next-line
  const Symbols = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/

  if (!values.username) {
    errors.username = 'Required'
  }

  if (values.username && values.username.length < 5) {
    errors.username = 'Username must be long then 5 characters long'
  }

  if (!Symbols.test(values.email)) {
    errors.email = 'Please enter a valid email'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  if (values.password && values.password.length < 7) {
    errors.password = 'Password length must be 7 or more characters long'
  }

  if (!values.password_confirmation) {
    errors.password_confirmation = 'Required'
  }

  if (values.password_confirmation !== values.password) {
    errors.password_confirmation = 'Passwords Must Match'
  }

  return errors
}

export default validate;