import * as c from './ActionTypes';

export const requestMovies = () => ({
  type: c.REQUEST_MOVIES
});

export const getAllMoviesSuccess = (movies) => ({
  type: c.GET_ALL_MOVIES_SUCCESS,
  movies
});

export const getAllMoviesFailure = (error) => ({
  type: c.GET_ALL_MOVIES_FAILURE,
  error
});