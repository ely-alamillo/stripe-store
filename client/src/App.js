import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Navgation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Store from './components/store/store';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

class Shell extends Component {
  render() {
    return (
      <Box>
        <App centered={false}>
          <Navigation />
          <Switch>
            <Route path="/store" component={Store} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </App>
      </Box>
    );
  }
}

export default Shell;
