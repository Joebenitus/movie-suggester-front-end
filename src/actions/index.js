import * as c from './ActionTypes';

export const requestMovies = () => ({
  type: c.REQUEST_MOVIES
});

export const getAllMoviesSSuccess = (movies) => ({
  type: c.GET_ALL_MOVIES_SUCCESS,
  movies
});

export const getAllMoviesFailure = (error) => ({
  type: c.GET_ALL_MOVIES_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestMovies);
    return fetch(`http://localhost:3000/movies`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getAllMoviesSuccess(jsonifiedResponse))
      })
      .catch((error) => {
        dispatch(getAllMoviesFailure(error));
      });
  }
  
}