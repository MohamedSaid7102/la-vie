import React from 'react';
import { NavLink } from 'react-router-dom';
import { Google as GoogleButton } from '../components/common/Buttons/Google';
import { Facebook as FacebookButton } from '../components/common/Buttons/Facebook';

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
  return (
    <>
      <form
        action="#!"
        className="max-w-screen-lg my-9 px-3 mx-auto flex flex-col gap-5"
      >
        {/* First name & Last name */}
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
          {/* First name */}
          <div className="form-group-col">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="firstName"
              name="firstName"
              id="firstName"
              className="form-input focus-visible-state"
            />
          </div>
          {/* Last name */}
          <div className="form-group-col">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              className="form-input focus-visible-state"
            />
          </div>
        </div>
        {/* Email */}
        <div className="form-group-col">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input focus-visible-state"
          />
        </div>
        {/* Password 1*/}
        <div className="form-group-col">
          <label htmlFor="password1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password1"
            id="password1"
            className="form-input focus-visible-state"
          />
        </div>
        {/* Password 2*/}
        <div className="form-group-col">
          <label htmlFor="password2" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password2"
            id="password2"
            className="form-input focus-visible-state"
          />
        </div>
        {/* Login button */}
        <button className="bg-primary text-white py-4  rounded-md font-medium focus-visible-state">
          Sign up
        </button>
        {/* Signup */}
        <p className="text-gray-500 text-center">
          Already have an account?{' '}
          <NavLink
            to="/signin"
            className="text-primary font-bold focus-visible-state"
          >
            Sign in
          </NavLink>
        </p>
        {/* Other Sign in methods */}
        <div className="flex flex-nowrap items-center gap-2 px-9 mb-5">
          {/* before line */}
          <svg
            aria-hidden="true"
            width="100%"
            height="2"
            viewBox="0 0 522 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.613281" y1="1" x2="521.613" y2="1" stroke="#9269BA" />
          </svg>
          {/* paragraph */}
          <p className="text-primary text-center relative whitespace-nowrap">
            or continue with
          </p>
          {/* after line */}
          <svg
            aria-hidden="true"
            width="100%"
            height="2"
            viewBox="0 0 522 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0.613281" y1="1" x2="521.613" y2="1" stroke="#9269BA" />
          </svg>
        </div>
        {/* Google & Facebook Signin methods */}
        <div className="flex flex-col justify-between gap-[1rem] sm:flex-row sm:gap-[4rem]">
          <GoogleButton />
          <FacebookButton />
        </div>
      </form>
    </>
  );
};
