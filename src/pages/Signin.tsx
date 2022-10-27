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
        className="max-w-screen-md my-9 mx-auto flex flex-col gap-5"
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
            className="text-primary underline font-medium text-[13px] whitespace-nowrap pr-[15px] focus-visible-state"
          >
            Forget password?
          </NavLink>
        </div>

        {/* Login button */}
        <button className="bg-primary text-white py-4 mx-3 rounded-md font-medium focus-visible-state">
          Login
        </button>

        {/* Signup */}
        <p className="text-gray-500 text-center">
          Don't have an account?{' '}
          <NavLink
            to="signup"
            className="text-primary font-bold focus-visible-state"
          >
            Sign up
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
