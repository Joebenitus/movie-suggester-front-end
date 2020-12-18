import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall, makeApiCallPost } from './../actions';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewMovieForm from './NewMovieForm';

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  handleNewMovieFormSubmission(title) {
    fetch(`http://localhost:3000/movies?title=${title}`, { method: 'POST' })
  }

  render() {
    const { error, isLoading, movies } = this.props;
    console.log(this.state)
    if (error) {
      return <>Error: {error.message}</>
    } else if (isLoading) {
      return <>Loading...</>
    } else {
      return (
        <>
          <NewMovieForm onNewMovieCreation={this.handleNewMovieFormSubmission}/>
          <h1 style={{textAlign: 'center'}}>Movies</h1>
          <ul>
            {movies.map((movie, index) => 
              <Card key={index}>
                <CardContent>
                  <Typography variant='h5'>
                    {movie.title}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </ul>
        </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Movies);