
// Used so that the the new page starts at the TOP

import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default RootLayout;