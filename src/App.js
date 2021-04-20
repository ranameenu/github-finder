import React, { Component } from 'react';
import './App.css';

class App extends Component {
  month = () => 'April';
  render() {
    const name = 'John Doe';
    const foo = () => 'Bar';
    const loading = false;
    const showname = true;

    return (
      <div className="app">
        {loading ? <h1>Loading...</h1> : showname && <h4>Hi I'm {name}</h4>}
      </div>
    );
  }
}

export default App;
