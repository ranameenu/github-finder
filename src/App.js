import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      // JSX TO RENDER
      <div className="app">
        <h1>HELLO REACT</h1>
      </div>
    );

    // PURE JS TO RENDER
    // React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'hello react')
    // );
  }
}

export default App;
