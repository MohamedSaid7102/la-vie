import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

interface ErrorPageProps {}

export const ErrorPage: React.FC<ErrorPageProps> = ({}) => {
  const error: any = useRouteError();

  console.error(error);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img
        src="/assets/images/not-found.png"
        alt="woundring setting women on a desk"
        className="w-[100%] p-8 max-w-[500px]"
      />
      <p className="sm:text-3xl font-light mb-9 text-center">
        Sorry, an unexpected error has occurred.
      </p>
      <p className=" text-center">
        <i>{error.statusText || error.message}</i>
      </p>
      <NavLink
        to="/"
        className="mt-7 text-primary mb-8 px-9 py-5 border-2 border-solid border-primary sm:text-lg
      hover:bg-primary hover:rounded-xl hover:text-white hover:shadow-2xl smooth-transition "
      >
        Back to Home
      </NavLink>
    </div>
  );
};
