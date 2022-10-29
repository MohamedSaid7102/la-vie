import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';

interface AuthWrapperProps {}
interface MyProps {
  children?: React.ReactNode;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = (props: MyProps) => {
  return (
    <>
      {/* Left decoration */}
      <img
        src="/assets/images/auth-decoration-left.png"
        alt="golden planet"
        className="left-auth-decoration"
      />
      <img
        src="/assets/images/auth-decoration-left.png"
        alt="golden planet"
        className="left-auth-decoration left-auth-decoration-varient "
      />
      {/* Nav & Children */}
      <div className="max-w-screen-xl m-auto">
        <header className="flex justify-center">
          <div
            className="
      flex justify-center gap-[2rem]
      sm:gap-[15rem]
      text-2xl 
      w-full 
      border-gray-300 border-solid border-b-[1px]"
          >
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? 'active-auth-navlink focus-visible-state'
                  : 'auth-navlink focus-visible-state'
              }
            >
              Sign up
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive
                  ? 'active-auth-navlink focus-visible-state'
                  : 'auth-navlink focus-visible-state'
              }
            >
              Login
            </NavLink>
          </div>
        </header>
        {props.children}
      </div>
      {/* Right decoration */}
      <img
        src="/assets/images/auth-decoration-right.png"
        alt="golden planet"
        className="right-auth-decoration right-auth-decoration-varient"
      />
      <img
        src="/assets/images/auth-decoration-right.png"
        alt="golden planet"
        className="right-auth-decoration"
      />
    </>
  );
};
