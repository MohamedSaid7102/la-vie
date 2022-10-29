import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@components/';
import { loginNavBarItems } from '@utils/data';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <div className="relative">
        <Navbar list={loginNavBarItems} />
        <Outlet />
      </div>
    </>
  );
};

export default App;

