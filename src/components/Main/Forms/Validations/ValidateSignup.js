const validate = (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  }

  if (!values.confirmation) {
    errors.confirmation = 'Required'
    if (values.confirmation !== values.password) {
      errors.confirmation = 'Passwords Must Match'
    }
  }

  return errors
}

export default validate;