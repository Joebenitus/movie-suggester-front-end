import moviesReducer from '../../reducers/movies-reducer';

describe('moviesReducer', () => {
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
});