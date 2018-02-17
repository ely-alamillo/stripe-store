import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';

import StripeCheckout from 'react-stripe-checkout';
import Button from 'grommet/components/Button';
import axios from 'axios';
// import './App.scss';

class Home extends Component {
  onToken = token => {
    axios
      .post('http://localhost:3021/api/checkout', { token: token.id })
      .then(res => {
        console.log('res: ', res);
      })
      .catch(err => {
        console.log('ther was an error', err);
      });
  };

  render() {
    return (
      <App className="App">
        <p className="App-intro">Store page yo</p>
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_lQChvBC3SslCU83lTaDxPst5"
        />
        <Button label="Label" href="#" />
      </App>
    );
  }
}

export default Home;
