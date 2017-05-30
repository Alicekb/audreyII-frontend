const initState = {
  requestingWeek: false,
  daysArray: [],
  errors: {}
}

export default (state = initState, action) => {
  switch(action.type) {
    case 'WEEK_REQUEST':
      return {
        ...state,
        requestingWeek: true
      }

    case 'WEEK_SUCCESS':
      return {
        ...state,
        requestingWeek: false,
        daysArray: action.days
      }

    case 'WEEK_FAILURE':
      return {
        requestingWeek: false,
        daysArray: [],
        errors: action.errors || {}
      }

    case 'RESET':
      return Object.assign({}, initState)

    default:
      return state;
  }
}