const initState = {
  loading: false,
  results: [],
  errors: {}
}

export default (state = initState, action) => {
  switch(action.type) {
    case 'SEARCH_REQUEST':
      return {
        ...state,
        loading: true,
        results: []
      }

    case 'SEARCH_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.results
      }

    case 'SEARCH_FAILURE':
      return {
        loading: false,
        errors: action.errors || {}
      }

    default:
      return state;
  }
}