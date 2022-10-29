import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/';
import { loginNavBarItems } from '@utils/data';

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

