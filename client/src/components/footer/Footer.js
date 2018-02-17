import React from 'react';
import App from 'grommet/components/App';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const CustomFooter = () => {
  return (
    <Box pad="small" colorIndex="neutral-4-a">
      <Footer justify="center">
        <Box direction="row" align="center" pad={{ between: 'medium' }}>
          <Paragraph margin="none" align="center">
            © 2018 Stripe Shop
          </Paragraph>
          <Menu
            direction="row"
            size="small"
            dropAlign={{ right: 'right' }}
            responsive={false}
          >
            <Anchor href="#">Support</Anchor>
            <Anchor href="#">Contact</Anchor>
            <Anchor href="#">About</Anchor>
          </Menu>
        </Box>
      </Footer>
    </Box>
  );
};

export default CustomFooter;
