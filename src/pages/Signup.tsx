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
        className="max-w-screen-md my-9 mx-auto flex flex-col gap-5"
      >
        {/* First name & Last name */}
        <div className="sm:flex">
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
        <button className="bg-primary text-white py-4 mx-3 rounded-md font-medium focus-visible-state">
          Sign up
        </button>

        {/* Signup */}
        <p className="text-gray-500 text-center">
          Already have an account?{' '}
          <NavLink
            to="signin"
            className="text-primary font-bold focus-visible-state"
          >
            Sign in
          </NavLink>
        </p>

        {/* Other Sign in methods */}
        <p
          className="text-primary text-center relative overflow-hidden

        sm:after:[''] sm:after:absolute sm:after:w-[100%] sm:after:h-[1px] sm:after:bg-gray-500 sm:after:top-[50%]

      sm:before:[''] sm:before:absolute sm:before:w-[37%] sm:before:h-[1px] sm:before:bg-gray-500 sm:before:top-[50%] sm:before:left-9 

      "
        >
          or continue with
        </p>

        <div
          className="flex flex-col justify-between gap-[1rem] px-5
              sm:flex-row sm:gap-[4rem]"
        >
          {/* google button */}
          <GoogleButton />
          <FacebookButton />
          {/* Facebook button */}
        </div>
      </form>
    </>
  );
};
