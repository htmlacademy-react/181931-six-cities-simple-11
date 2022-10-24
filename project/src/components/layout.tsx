import React, { Fragment } from 'react';
import {Outlet} from 'react-router-dom';
import Header from './header/header';

function Layout(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default Layout;
