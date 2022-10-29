import React from 'react';

interface BestSellerSectionProps {}

export const BestSellerSection: React.FC<BestSellerSectionProps> = ({}) => {
  return (
    <>
      <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] px-7">
        <h2 className="font-[900] text-4xl sm:text-7xl relative w-max">
          Best seller{' '}
          <span className="absolute sm:top-[-30px] sm:right-[-4.5rem] top-[-15px] right-[-3rem] font-extralight">
            __
          </span>
        </h2>
        {/* Horizontally Scrolling gallery */}
        {/* Card container */}
        <div
          className="up-down-items-side-scroller flex flex-row flex-nowrap gap-10 overflow-x-auto px-[3rem]
				sm:min-h-[40rem] odd:mt-12"
        >
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p9.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                Spider plant
              </h3>
              <span className="font-medium">190 EGP</span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p7.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                juniper bonsai
              </h3>
              <span className="font-medium">100 EGP</span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p8.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                snake plant
              </h3>
              <span className="font-medium">180 EGP</span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p9.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                Spider plant
              </h3>
              <span className="font-medium">190 EGP</span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p7.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                juniper bonsai
              </h3>
              <span className="font-medium">100 EGP</span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p8.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                snake plant
              </h3>
              <span className="font-medium">180 EGP</span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p9.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                Spider plant
              </h3>
              <span className="font-medium">190 EGP</span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p7.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                juniper bonsai
              </h3>
              <span className="font-medium">100 EGP</span>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-4 items-start w-max h-max">
            <img
              src="/src/assets/images/p8.png"
              alt="planet image"
              className="max-w-[200px] sm:max-w-[400px]"
            />
            <div className="w-[100%]">
              <h3 className="font-bold text-lg sm:text-2xl uppercase">
                snake plant
              </h3>
              <span className="font-medium">180 EGP</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
