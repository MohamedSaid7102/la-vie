import { ListItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from 'src/redux/store';
import { NavbarItemType } from 'types/types';

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
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
                ? 'text-primary w-full h-full flex justify-center py-3'
                : ' w-full h-full flex justify-center py-3'
            }
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
