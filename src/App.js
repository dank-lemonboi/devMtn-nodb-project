import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import Container from './components/Container.js';

class App extends Component {
  render() {
    return (
        <div className="app_container">
        <Header />
        <Container />
        <Footer />
        </div>

    );
  }
}

export default App;
