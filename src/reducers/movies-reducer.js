import * as c from './../actions/ActionTypes';

const defaultState = {
  isLoading: false,
  movies: [],
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case c.REQUEST_MOVIES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_ALL_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false, 
        movies: action.movies
      });
    default:
      return state
  }
}