import React, { useEffect, useState } from 'react';
import { NavbarListType } from 'types/types';
import { NavbarItem } from './NavbarItem';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { NavLink } from 'react-router-dom';
import { MobileNavbar } from './MobileNavbar';

interface NavbarProps {
  list: NavbarListType;
}

export const Navbar: React.FC<NavbarProps> = ({ list }) => {
  const menueOpen = useSelector((state: RootState) => state.navbar.menueOpen);
  const [windowDimenion, detectHW] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimenion]);
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0
      z-30 border-[1px] border-solid w-full bg-transparent backdrop-blur
      sm:border-none"
      >
        {/* Mobile nav start */}
        {windowDimenion.width < 640 && <MobileNavbar />}
        {/* Mobile nav end */}
        <ul
          className={`
          ${
            windowDimenion.width >= 640
              ? 'h-max opacity-1 select-all pointer-events-auto'
              : menueOpen
              ? 'h-max'
              : 'opacity-0 h-0 select-none pointer-events-none'
          }
          transition-height duration-200
          w-full max-w-[2140px] m-auto
          // Responsiveness
          sm:py-1
          flex flex-col items-center justify-around gap-2
          /* responsiveness */
          sm:flex-row sm:justify-around
          `}
        >
          {list.map((item) => (
            <NavbarItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>
      {/* To push any other content down */}
      <span className="mb-[100px] block"></span>
    </>
  );
};
