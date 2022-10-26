import React from 'react';
import { Navbar } from './components/common/navbar/Navbar';
// import Sidebar from './components/testTailwind/Sidebar';
import { ListType } from 'types/types';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const loginNavBarItems: ListType = [
    {
      itemDom: <img src="/src/assets/images/logo.png" alt="logo" />,
      itemPath: '/home',
    },
    {
      itemDom: <span>Home</span>,
      itemPath: '/home',
    },
    {
      itemDom: <span>Shop</span>,
      itemPath: '/shop',
    },
    {
      itemDom: <span>Blog</span>,
      itemPath: '/blog',
    },
    {
      itemDom: <span>About</span>,
      itemPath: '/about',
    },
    {
      itemDom: <button>Sign Up</button>,
    },
  ];
  return (
    <div className="App">
      <Navbar list={loginNavBarItems} />
    </div>
  );
};

export default App;

