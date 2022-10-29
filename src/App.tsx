import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/';
import { loginNavBarItems } from '@utils/data';

export const App: React.FC = ({}) => {
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

