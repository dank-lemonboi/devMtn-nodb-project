import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

import Container from './components/Container.js';

class App extends Component {
  render() {
    return (
        <div className="app_container">
        <Header />
        <Container />

        </div>

    );
  }
}

export default App;
