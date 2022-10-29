import React from 'react';
import { Description as DescriptionCard, CustomBranchBtn } from '@components/';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      {/* 1. header & Hero */}
      <header className="flex flex-col gap-[3.5rem] hero-break-1:flex-row sm:justify-between hero-break-2:items-center hero-break-2:min-h-screen">
        {/* tree image */}
        <div className="relative hero-break-2:scale-[200%] hero-break-2:left-[5rem]">
          <img
            src="/assets/images/hero-tree.png"
            alt="tree"
            className="max-w-[200px]"
          />
          {/* Half circle */}
          <svg
            className="absolute top-[-23rem] left-0 pointer-events-none"
            aria-hidden="true"
            width="220"
            height="1077"
            viewBox="0 0 641 1077"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_2_357)">
              <circle
                cx="102.5"
                cy="534.5"
                r="531.5"
                stroke="#1ABC00"
                strokeWidth="6"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_2_357"
                x="-436"
                y="0"
                width="1077"
                height="1077"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.101961 0 0 0 0 0.737255 0 0 0 0 0 0 0 0 0.29 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_357"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_357"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          {/* Buttons */}
          <CustomBranchBtn
            text="Leaves"
            style="absolute top-[2rem] left-[9.9rem]"
          />
          <CustomBranchBtn
            text="Branch"
            style="absolute top-[6rem] left-[12.5rem]"
          />
          <CustomBranchBtn
            text="Trunk"
            style="absolute top-[10rem] left-[13.1rem]"
          />
          <CustomBranchBtn
            text="Roots"
            style="absolute top-[14rem] left-[12.4rem]"
          />
        </div>
        {/* content */}
        {/* Descritpion */}
        <DescriptionCard
          heading="Perfect way to plant in house"
          desc="leaf, in botany, any usually flattened green outgrowth from the stem
				of a vascular plant. As the primary sites of photosynthesis, leaves
				manufacture food for plants, which in turn ultimately nourish and
				sustain all land animals."
          btnTxt="Explore Now"
        />
      </header>
    </>
  );
};
