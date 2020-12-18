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

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'

})

export const postMovieSuccess = (movies) => ({
  type: 'POST_MOVIE_SUCCESS',
  movies
})

export const postMovieFailure = (error) => ({
  type: 'POST_MOVIE_FAILURE',
  error
})

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

export const makeApiCallPost = (title) => {
  return dispatch => {
    dispatch(requestMovies);
    return fetch(`http://localhost:3000/movies?title=${title}`, { method: 'POST' })
      .then(response => response.json())
      .then(() => {
        dispatch(postMovieSuccess())
      })
      .catch((error) => {
        dispatch(postMovieFailure(error));
      });
  }
  
}