import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavbarItem, MobileNavbar } from '@components/';
import { RootState } from '@redux/store';
// Hiding navbar logic
import { handleCloseNavbarDropdownCases } from '@utils/';
import useOutsideClickDetect from '@hooks/useOutsideClick';
import { hideNavbar } from '@redux/features/navbarSlice';

type NavbarItemType = {
  id: number;
  dom: JSX.Element;
  navigatable: boolean;
  path?: string;
};

type NavbarListType = Array<NavbarItemType>;
interface NavbarProps {
  list: NavbarListType;
}

export const Navbar: React.FC<NavbarProps> = ({ list }) => {
  const menueOpen = useSelector((state: RootState) => state.navbar.menueOpen);

  // ----------- Closing navbar on specific cases logic start ----------
  const dispatch = useDispatch();
  const navbarRef = useRef(null);
  function closeDropdownNav() {
    dispatch(hideNavbar());
  }
  handleCloseNavbarDropdownCases();
  useOutsideClickDetect(navbarRef, closeDropdownNav);
  // ----------- Closing navbar on specific cases logic end -----------

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
        ref={navbarRef}
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
          max-w-[2000px] m-auto
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
