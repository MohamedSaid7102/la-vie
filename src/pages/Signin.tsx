import React from 'react';
import { NavLink } from 'react-router-dom';
import { Google as GoogleButton } from '../components/common/Buttons/Google';
import { Facebook as FacebookButton } from '../components/common/Buttons/Facebook';

interface SigninProps {}

export const Signin: React.FC<SigninProps> = ({}) => {
  return (
    <>
      <form
        action="#!"
        className="max-w-screen-lg my-9 mx-auto flex flex-col gap-5 px-3"
      >
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
        {/* Password */}
        <div className="form-group-col">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input focus-visible-state"
          />
        </div>
        {/* Remember me + Forget password */}
        <div className="flex flex-row justify-between">
          {/* Remember me */}
          <div className="form-group-row">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="focus-visible-state"
            />
            <label
              htmlFor="checkbox"
              className="
              form-label text-gray-500 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {/* Forget password */}
          <NavLink
            to="/password-reset"
            className="text-primary hover:text-slate-500 underline font-medium text-[13px] whitespace-nowrap pr-[15px] smooth-transition focus-visible-state"
          >
            Forget password?
          </NavLink>
        </div>

        {/* Login button */}
        <button
          className="bg-primary hover:bg-slate-500
        smooth-transition text-white py-4 mt-4 rounded-md font-medium focus-visible-state"
        >
          Login
        </button>

        {/* Signup */}
        <p className="text-gray-500 text-center">
          Don't have an account?{' '}
          <NavLink
            to="/signup"
            className="text-primary font-bold focus-visible-state hover:text-gray-700 smooth-transition"
          >
            Sign up
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

/**Prposed
 * 1) Normal function
 * 
 * 2)
type FormGroupPropType = {
  props: { name: string; type: string };
};

const FormGroup: React.FC<FormGroupPropType> = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.name}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        className={`${
          props.type == 'email' || 'password' || ('text' && 'form-input')
        } focus-visible-state`}
      />
    </div>
  );
};
 */
