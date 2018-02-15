import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './App.css';

class App extends Component {
  onToken = token => {
    axios
      .post('http://localhost:3001/api/checkout', { token: token.id })
      .then(res => {
        console.log('res: ', res);
      })
      .catch(err => {
        console.log('ther was an error', err);
      });
  };

  render() {
    return (
      <div className="App">
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
      </div>
    );
  }
}

export default App;
