import React from 'react';
import NewMovieForm from './NewMovieForm';
import { connect } from 'react-redux';
import * as a from '../actions/index';
import Movies from './Movies'

class MovieControl extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   formVisibleOnPage: false,
    //   selectedTicket: null
    // };
  }

  // handleClick = () => {
  //   if (this.state.selectedMovie != null) {
  //     this.setState({
  //       selectedMovie: null, 
  //     });
      
  //   } else {
  //     const { dispatch } = this.props;
  //     const action = a.toggleForm();
  //     dispatch(action);
  //   }
  // }

  handleNewMovieFormSubmission() {
    const { dispatch } = this.props;
    const action = a.makeApiCallPost('Marley & Me');
    dispatch(action);
  }

  render() {
    return (
      <>
        <NewMovieForm onNewMovieCreation={this.handleNewMovieFormSubmission}  />
        <Movies/>
      </>
    )
  }
}

export default MovieControl;