import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('Movie reducer actions', () => {
  it('requestMovies should create REQUEST_MOVIES action', () => {
    expect(actions.requestMovies()).toEqual({
      type: c.REQUEST_MOVIES
    });
  });

  it('getAllMoviesSuccess should create GET_ALL_MOVIES_SUCCESS action', () => {
    const movies = 'Inside Out';
    expect(actions.getAllMoviesSuccess(movies)).toEqual({
      type: c.GET_ALL_MOVIES_SUCCESS,
      movies
    });
  });

  it('getAllMoviesFailure should create GET_ALL_MOVIES_FAILURE action', () => {
    const error = 'error';
    expect(actions.getAllMoviesFailure(error)).toEqual({
      type: c.GET_ALL_MOVIES_FAILURE,
      error
    })
  })
});