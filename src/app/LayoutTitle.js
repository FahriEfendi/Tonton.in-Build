
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const Layout = ({ children }) => (
  <HelmetProvider>
    <div>
      {children}
    </div>
  </HelmetProvider>
);

export default Layout;