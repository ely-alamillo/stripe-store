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
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_lQChvBC3SslCU83lTaDxPst5"
        />
        <Button label="Label" href="#" />
      </App>
    );
  }
}

// export default () => (
//   <App>
//     <Title>Hello World</Title>
//     <p>Hello from a Grommet page!</p>
//     <Button label="Label" href="#" />
//   </App>
// );

export default Home;
