import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Actions from 'grommet/components/icons/base/Actions';

const Navigation = props => {
  return (
    <Header>
      <Title>Stripe Shop</Title>
      <Box flex={true} justify="end" direction="row" responsive={false}>
        <Search
          inline={true}
          fill={true}
          size="medium"
          placeHolder="Search"
          dropAlign={{ right: 'right' }}
        />
        <Menu icon={<Actions />} dropAlign={{ right: 'right' }}>
          <Anchor href="#" className="active">
            First
          </Anchor>
          <Anchor href="#">Second</Anchor>
          <Anchor href="#">Third</Anchor>
        </Menu>
      </Box>
    </Header>
  );
};
export default Navigation;
