import React from 'react';
import { Navbar } from './components/common/navbar/Navbar';
// import Sidebar from './components/testTailwind/Sidebar';
import { loginNavBarItems } from './utils/data';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="min-h-[200vh]">
      <Navbar list={loginNavBarItems} />

      <main>
        <h1>Hello world</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          consectetur dolores vel beatae maxime atque eligendi non debitis hic!
          Similique reprehenderit voluptatum nihil, corrupti perferendis,
          delectus officiis asperiores, ipsa temporibus iste sapiente autem
          vitae dicta architecto deleniti nemo animi aliquid.
        </p>
        <ul>
          <li>lorem101</li>
          <li>lorem102</li>
          <li>lorem103</li>
          <li>lorem104</li>
          <li>lorem105</li>
          <li>lorem106</li>
          <li>lorem107</li>
        </ul>
      </main>
    </div>
  );
};

export default App;

