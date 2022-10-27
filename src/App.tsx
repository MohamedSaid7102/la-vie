import React from 'react';
import { AuthWrapper } from './components/authuntication/AuthWrapper';
import { Navbar } from './components/common/navbar/Navbar';
import { Signin } from './pages/Signin';
// import Sidebar from './components/testTailwind/Sidebar';
import { loginNavBarItems } from './utils/data';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="min-h-[200vh]">
      <Navbar list={loginNavBarItems} />
      <AuthWrapper>
        {/* <Signin /> */}
        {/* <Signup /> */}
      </AuthWrapper>
    </div>
  );
};

export default App;

