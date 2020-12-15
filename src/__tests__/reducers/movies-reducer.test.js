import moviesReducer from '../../reducers/movies-reducer';
import * as c from './../../actions/ActionTypes';

describe('moviesReducer', () => {

  let action;
  const defaultState = {
    isLoading: false,
    movies: [],
    error: null
  };

  test('Should successfully return default state if no action type is passed', () => {
    expect(moviesReducer(defaultState, { type: null })).toEqual({
      isLoading: false,
      movies: [],
      error: null
    });
  });

  test('Requesting movies should set isLoading to true', () => {
    action = {
      type: c.REQUEST_MOVIES
    };

    expect(moviesReducer(defaultState, action)).toEqual({
      isLoading: true,
      movies: [],
      error: null
    });
  });
});