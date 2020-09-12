import {Toolbar} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

const NavbarView = ({}: ConnectedProps<typeof connector>) => (
  <AppBar position="static">
    <Toolbar>
      <div>yggdrasil2</div>
    </Toolbar>
  </AppBar>
);

const connector = connect(
  undefined,
  {}
);

export const Navbar = connector(NavbarView);

