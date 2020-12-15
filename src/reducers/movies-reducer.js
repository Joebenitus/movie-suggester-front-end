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
    default:
      return state
  }
}