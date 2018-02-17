import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './components/home/Home';
import App from 'grommet/components/App';

class Shell extends Component {
  render() {
    return (
      <App className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/" exact component={Home} />
      </App>
    );
  }
}

export default Shell;
