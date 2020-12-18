import './../App.css';
import React from 'react';
import Navbar from './Navbar';
import Container from '@material-ui/core/Container';
import Movies from './Movies';
import NewMovieForm from './NewMovieForm';

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Movies/>
      </Container>
    </>
  );
}

export default App;
