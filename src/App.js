import React, { Component } from 'react';
import Routes from './routes';
import Menu from './components/common/Menu'
import './App.css'

class App extends Component {
  render() {
    console.log("dasdsadsadsadsadsa");
    return (
      <div className="App">
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
