import React, { Component } from 'react';
import Header from '../Header';
import Routes from '../Routes';
import Footer from '../Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes className="marginBottom-2 clearFix" />
        <Footer />
      </div>
    );
  }
}

export default App;
