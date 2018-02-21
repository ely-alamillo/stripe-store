import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import App from 'grommet/components/App';
import Title from 'grommet/components/Title';

import StripeCheckout from 'react-stripe-checkout';
import Button from 'grommet/components/Button';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import heroImg from '../../images/hero-img.jpg';

import axios from 'axios';
// import './App.scss';

class Home extends Component {
  render() {
    return (
      <Box>
        <App className="App" centered={false}>
          <Hero
            background={<Image src={heroImg} fit="cover" full={true} />}
            backgroundColorIndex="dark"
          >
            <Box direction="row" justify="center" align="center">
              <Box
                align="end"
                pad="medium"
                style={{ backgroundColor: 'rgba(100, 100, 100, 0.8)' }}
              >
                <Heading margin="none">Welcome!</Heading>
              </Box>
              {/* <Box basis="1/2" align="start" pad="medium">
                <Heading margin="none">Welcome!</Heading>
              </Box> */}
            </Box>
          </Hero>
          <Section>
            <Box direction="row" justify="center" align="center">
              <Box align="center" pad="small" basis="1/2">
                <Heading margin="none">Who We Are</Heading>
              </Box>
              <Box align="center" pad="small" basis="1/2">
                <Heading margin="none">Stripe Shop</Heading>
                <Paragraph size="large" align="start">
                  Built from the ground up, Stripe Shop is a humble online store
                  aiming to please all of our customers. We pride ourselves in
                  honest bussiness and outstanding customer service. We are
                  always looking to provide the best products and services to
                  all of our customers. If there is anything we can do better
                  don't hesitate to contact us and we will do our best to meet
                  your needs.
                </Paragraph>
              </Box>
            </Box>
          </Section>
        </App>
      </Box>
    );
  }
}

export default Home;
