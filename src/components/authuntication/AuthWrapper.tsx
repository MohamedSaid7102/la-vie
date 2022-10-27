import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';

interface AuthWrapperProps {}
interface MyProps {
  children?: React.ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = (props: MyProps) => {
  return (
    <>
      <header className="flex justify-center">
        <div
          className="
      flex justify-center gap-[2rem]
      sm:gap-[15rem]
      text-2xl 
      w-full 
      border-gray-300 border-solid border-b-[1px] max-w-[1500px]"
        >
          <NavLink
            to="signup"
            className={({ isActive }) =>
              isActive ? 'active-auth-navlink' : 'auth-navlink'
            }
          >
            Sign up
          </NavLink>
          <NavLink
            to="signin"
            className={({ isActive }) =>
              isActive ? 'active-auth-navlink' : 'auth-navlink'
            }
          >
            Login
          </NavLink>
        </div>
      </header>
      {props.children}
    </>
  );
};
