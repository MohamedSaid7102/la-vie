import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '@redux/store';
// import { NavbarItemType } from '@types/types';
type NavbarItemType = {
  id: number;
  dom: JSX.Element;
  navigatable: boolean;
  path?: string;
};
type NavbarListType = Array<NavbarItemType>;

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
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
      {item.navigatable ? (
        <li
          className={`
          font-[500] w-full text-center
          border-b-[1px] border-gray-400
          sm:border-none sm:max-w-max`}
        >
          <NavLink
            to={item.path || ''}
            className={({ isActive }) =>
              isActive
                ? 'text-primary w-full h-full flex justify-center py-3 focus-visible-state'
                : ' w-full h-full flex justify-center py-3 hover:text-slate-600 hover:underline focus-visible-state'
            }
            tabIndex={windowDimenion.width > 640 ? 0 : !menueOpen ? -1 : 0}
          >
            {item.dom}
          </NavLink>
        </li>
      ) : (
        <li>{item.dom}</li>
      )}
    </>
  );
};
