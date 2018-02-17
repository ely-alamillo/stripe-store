import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';

import StripeCheckout from 'react-stripe-checkout';
import Button from 'grommet/components/Button';
import axios from 'axios';
// import './App.scss';

class Home extends Component {
  render() {
    return (
      <App className="App">
        <p className="App-intro">Home page yo</p>
      </App>
    );
  }
}

export default Home;
