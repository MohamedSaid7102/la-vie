import React from 'react';
import { AuthWrapper } from './components/authuntication/AuthWrapper';
import { Navbar } from './components/common/navbar/Navbar';
import { Signin } from './pages/Signin';
// import Sidebar from './components/testTailwind/Sidebar';
import { loginNavBarItems } from './utils/data';
import { Outlet } from 'react-router-dom';

// import { getContacts } from '../contacts';

// export async function loader() {
//   const contacts = await getContacts();
//   return { contacts };
// }

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

