import React from 'react';
import { AuthWrapper } from './components/authuntication/AuthWrapper';
import { Navbar } from './components/common/navbar/Navbar';
import { Signin } from './pages/Signin';
// import Sidebar from './components/testTailwind/Sidebar';
import { loginNavBarItems } from './utils/data';
import { Signup } from './pages/Signup';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="min-h-[200vh]">
      <Navbar list={loginNavBarItems} />
      {/* Signin & Signup Pages */}
      {/* <AuthWrapper>
        <Signin />
        <Signup />
      </AuthWrapper> */}
    </div>
  );
};

export default App;

