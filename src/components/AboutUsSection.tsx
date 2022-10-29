import React from 'react';

interface AboutUsProps {}

export const AboutUs: React.FC<AboutUsProps> = ({}) => {
  return (
    <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] px-7  about-us-break-1:flex-row">
      {/* Left */}
      <div className="flex flex-col gap-[1rem] sm:gap-[2rem] max-w-[40rem]">
        <h2 className="font-[900] text-4xl sm:text-7xl relative w-max">
          About us{' '}
          <span className="absolute sm:top-[-30px] sm:right-[-4.5rem] top-[-15px] right-[-3rem] font-extralight">
            __
          </span>
        </h2>
        <p className="sm:text-xl text-slate-500 sm:pl-7 pl-1">
          Welcome to La Vie, your number one source for planting. We're
          dedicated to giving you the very best of plants, with a focus on
          dependability, customer service and uniqueness. Founded in 2020, La
          Vie has come a long way from its beginnings in a home office our
          passion for helping people and give them some advices about how to
          plant and take care of plants. We now serve customers all over Egypt,
          and are thrilled to be a part of the eco-friendly wing{' '}
        </p>
      </div>
      {/* Right */}
      <div className="relative w-max max-w-[20rem] sm:max-w-[30rem] m-auto">
        <img
          src="/src/assets/images/meeting.png"
          alt="meeting people"
          className="w-[85%] sm:w-[100%] min-w-[200px]"
        />
        <img
          src="/src/assets/images/frame-rect.png"
          alt="meeting people"
          className="absolute w-[85%] sm:w-[100%] min-w-[200px] top-[1rem] left-[-1rem] z-[-1]"
        />
      </div>
    </div>
  );
};
