import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Navgation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Store from './components/store/store';
import App from 'grommet/components/App';
import Navigation from './components/navigation/Navigation';

class Shell extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {/* <Switch>
          <Route path="/store" component={Store} />
          <Route path="/" component={Home} />
        </Switch> */}
      </div>
    );
  }
}

export default Shell;
