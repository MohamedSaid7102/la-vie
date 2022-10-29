import React from 'react';
import { AppleBtn, PlaystoreBtn } from '@components/';

interface MobileAppSectionProps {}

export const MobileAppSection: React.FC<MobileAppSectionProps> = ({}) => {
  return (
    <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] pl-7 pr-4 about-us-break-1:flex-row">
      {/* Left */}
      <div className="relative w-max max-w-[20rem] sm:max-w-[30rem] m-auto">
        <img
          src="/assets/images/two-phones.png"
          alt="meeting people"
          className="sm:w-[100%] min-w-[200px] sm:scale-150"
        />
      </div>
      {/* Right */}
      <div className="flex flex-col gap-[1rem] sm:gap-[2rem] max-w-[50rem]">
        <h2 className="font-[900] whitespace-pre-wrap text-2xl mobile-app-break-1:text-7xl relative w-max">
          Mobile Application
          <span className="absolute mobile-app-break-1:top-[-30px] mobile-app-break-1:right-[-4.5rem] top-[-15px] right-[-3rem] font-extralight">
            _
          </span>
        </h2>
        <div className="sm:pl-7 pl-1">
          <p className="sm:text-xl text-slate-500 ">
            You can install La Vie mobile application and enjoy with new
            featurs, earn more points and get discounts Also you can scan QR
            codes in your plants' pots so that you can get discount on
            everything in the website up to 70%
          </p>
          <span className="font-bold">install by</span>
          {/* Install buttons */}
          <div className="mt-[1rem] flex flex-col gap-[1rem] sm:flex-row">
            <PlaystoreBtn />
            <AppleBtn />
          </div>
        </div>
      </div>
    </div>
  );
};
