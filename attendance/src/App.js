import React, { Component } from 'react';
import './App.css';
import Navsbar from './components/navbar';
import But from './components/button';
class App extends Component {


  render() {
    return (
      <>
        <Navsbar />
        <But />
      </>
    );
  }
}

export default App;
