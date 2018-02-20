import React, { Component } from 'react';

import App from 'grommet/components/App';
import Title from 'grommet/components/Title';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'grommet/components/Button';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Section from 'grommet/components/Section';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Headphones from '../../images/headphones.jpg';
import axios from 'axios';
// import './App.scss';

class Home extends Component {
  state = {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };

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
      <section className="App">
        <p className="App-intro"> Products Available</p>

        <Tiles flush={false} fill={true}>
          {this.state.items.map(item => {
            return (
              <Tile key={item}>
                <Card
                  thumbnail={<Image src={Headphones} fit="cover" full={true} />}
                  label="Audiophile"
                  heading="Bancor Wireless Headphones"
                  description="These headphones will definitely take you to another dimension of hearing."
                />
              </Tile>
            );
          })}
        </Tiles>
      </section>
    );
  }
}

export default Home;

{
  /* <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_lQChvBC3SslCU83lTaDxPst5"
        />
        <Button label="Label" href="#" /> */
}
