import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenue } from '@redux/features/navbarSlice';
import { RootState } from '@redux/store';

export const MenueBtn: React.FC = () => {
  const menueOpen = useSelector((state: RootState) => state.navbar.menueOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button
        aria-label={`${menueOpen ? 'Close' : 'Open'} main menue`}
        onClick={() => dispatch(toggleMenue())}
        className="
         
          w-[45px] h-[45px] z-30 right-[10px] top-[5px] rounded-full p-[5px]
          border-[1px] border-primary
          flex justify-center items-center
          sm:scale-0
          focus-visible-state
          "
      >
        {menueOpen ? (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#1abc00"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="128"
              r="28"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></circle>
            <path
              d="M115,103.2c-7.3-15.4-15-34.6-15-47.2a28,28,0,0,1,56,0c0,12.6-7.7,31.8-15,47.2"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></path>
            <path
              d="M100,126.8c-17-1.3-37.5-4.3-48.4-10.6a28,28,0,0,1,28-48.4C90.5,74,103.3,90.3,113,104.4"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></path>
            <path
              d="M113,151.6c-9.7,14.1-22.5,30.4-33.4,36.6a28,28,0,1,1-28-48.4c10.9-6.3,31.4-9.3,48.4-10.6"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></path>
            <path
              d="M141,152.8c7.3,15.4,15,34.6,15,47.2a28,28,0,0,1-56,0c0-12.6,7.7-31.8,15-47.2"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></path>
            <path
              d="M156,129.2c17,1.3,37.5,4.3,48.4,10.6a28,28,0,0,1-28,48.4c-10.9-6.2-23.7-22.5-33.4-36.6"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></path>
            <path
              d="M143,104.4c9.7-14.1,22.5-30.4,33.4-36.6a28,28,0,0,1,28,48.4c-10.9,6.3-31.4,9.3-48.4,10.6"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></path>
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#1abc00"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="40"
              y1="216"
              x2="216"
              y2="216"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></line>
            <path
              d="M96,216V132H84A60,60,0,0,1,24,72h0A20.1,20.1,0,0,1,44,52h0A20.1,20.1,0,0,1,64,72h0A20.1,20.1,0,0,0,84,92H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v76h12a20.1,20.1,0,0,0,20-20h0a20.1,20.1,0,0,1,20-20h0a20.1,20.1,0,0,1,20,20h0a60,60,0,0,1-60,60H160v44"
              fill="none"
              stroke="#1abc00"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            ></path>
          </svg>
        )}
      </button>
    </>
  );
};
