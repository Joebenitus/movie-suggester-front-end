import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: []
    };
  }

  componentDidMount() {
    this.makeApiCall();
  }

  makeApiCall = () => {
    fetch(`http://localhost:3000/movies`)
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        this.setState({
          isLoaded: true,
          movies: jsonifiedResponse
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const { error, isLoaded, movies } = this.state;
    console.log(this.state)
    if (error) {
      return <>Error: {error.message}</>
    } else if (!isLoaded) {
      return <>Loading...</>
    } else {
      return (
        <>
          <h1>Movies</h1>
          <ul>
            {movies.map((movie, index) => 
              <li key={index}>
                <h3>{movie.title}</h3>
              </li>
            )}
          </ul>
        </>
      )
    }
  }
}

export default Movies;