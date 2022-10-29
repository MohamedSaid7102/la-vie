import React from 'react';

interface CategoriesSectionProps {}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({}) => {
  return (
    <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] px-7">
      <h2 className="font-[900] text-4xl sm:text-7xl relative w-max">
        Popular{' '}
        <span className="absolute sm:top-[-30px] top-[-15px] right-0 font-extralight">
          ___
        </span>
        <br />
        Categories
      </h2>
      {/* Horizontally Scrolling gallery */}
      {/* Card container */}
      <div className="flex flex-row flex-nowrap gap-10 overflow-x-auto px-10">
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p4.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">Tools</h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p5.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">Seeds</h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p6.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">
            Low Light Plants
          </h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p4.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">Tools</h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p5.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">Seeds</h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p6.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">
            Low Light Plants
          </h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p4.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">Tools</h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p5.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">Seeds</h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p6.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">
            Low Light Plants
          </h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p4.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">Tools</h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p5.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">Seeds</h3>
        </div>
        {/* card */}
        <div className="flex flex-col gap-4 items-center w-max">
          <img
            src="/src/assets/images/p6.png"
            alt="planet image"
            className="max-w-[100px] sm:max-w-[200px]"
          />
          <h3 className="font-bold text-lg sm:text-2xl text-center">
            Low Light Plants
          </h3>
        </div>
      </div>
    </div>
  );
};
