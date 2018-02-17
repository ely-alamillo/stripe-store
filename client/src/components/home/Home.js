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

import axios from 'axios';
// import './App.scss';

class Home extends Component {
  render() {
    return (
      <Box>
        <App className="App" centered={false}>
          <Hero
            background={
              <Image
                src="http://www.arte-d.it/wp-content/uploads/2016/11/S_tait_AM-2.jpg"
                fit="cover"
                full={true}
              />
            }
            backgroundColorIndex="dark"
          >
            <Box direction="row" justify="center" align="center">
              <Box basis="1/2" align="end" pad="medium">
                <Heading margin="none">Sample Heading One</Heading>
              </Box>
              <Box basis="1/2" align="start" pad="medium">
                <Heading margin="none">Sample Heading Two</Heading>
              </Box>
            </Box>
          </Hero>
          <Section style={{ border: '2px solid green' }}>
            <Box direction="row" justify="center" align="center">
              <Box basis="1/4" align="end" pad="medium" />
              <Box basis="1/2" align="center" pad="medium">
                <Heading margin="none">Sample Heading Two</Heading>
                <Paragraph>
                  Raised on hip-hop and foster care, defiant city kid Ricky gets
                  a fresh start in the New Zealand countryside. He quickly finds
                  himself at home with his new foster family: the loving Aunt
                  Bella, the cantankerous Uncle Hec, and dog Tupac. When a
                  tragedy strikes that threatens to ship Ricky to another home,
                  both he and Hec go on the run in the bush. As a national
                  manhunt ensues, the newly branded outlaws must face their
                  options: go out in a blaze of glory or overcome their
                  differences and survive as a family.
                </Paragraph>
              </Box>
              <Box basis="1/4" align="end" pad="medium" />
            </Box>
          </Section>
        </App>
      </Box>
    );
  }
}

export default Home;
