import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './App.css';

class App extends Component {
  onToken = token => {
    console.log('token: ', token);
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
