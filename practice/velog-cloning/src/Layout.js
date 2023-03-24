import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Tabs from './Tabs';

const Layout = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
