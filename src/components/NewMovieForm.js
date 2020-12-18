import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import * as a from './../actions'

function NewMovieForm(props) {

  function handleNewMovieFormSubmission(event) {
    event.preventDefault();
    props.onNewMovieCreation();
    return {
      title: event.target.title.value,
      id: event.target.id.value
    }
  }
  return (
  <React.Fragment>
    <h1>
      add a movie
    </h1>
    <form onSubmit={props.onNewMovieCreation}>
      <input
        type = 'text'
        title = 'title' />
      <Button type='submit' variant="contained" color="primary">Add Movie</Button>
    </form>
  </React.Fragment>
  )
};

NewMovieForm.propTypes = {
  onNewMovieCreation: PropTypes.func
};

export default NewMovieForm; 