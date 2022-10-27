import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { NavLink } from 'react-router-dom';
import { MenueBtn } from '../../MenueBtn';

export const MobileNavbar: React.FC = () => {
  const menueOpen = useSelector((state: RootState) => state.navbar.menueOpen);

  return (
    <div
      className={`flex ${
        menueOpen ? 'justify-end' : 'justify-between'
      } h-full items-center p-[13px]`}
    >
      {/* Logo */}
      {!menueOpen && (
        <NavLink to="/home">
          <img
            src="src/assets/images/logo.png"
            alt="logo"
            className="relative max-w-[60px] h-max  top-[5px] left-[30px] 
sm:relative sm:top-0 sm:left-0 z-30"
          />
        </NavLink>
      )}
      {/* Open Close button */}
      <MenueBtn />
    </div>
  );
};
