import React, { MouseEventHandler } from 'react';

interface DescriptionProps {
  heading: string;
  desc: string;
  btnTxt?: string;
  btnAction?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Description: React.FC<DescriptionProps> = ({
  heading,
  desc,
  btnTxt,
  btnAction,
}) => {
  return (
    <>
      <div className="flex flex-col gap-3 px-3 sm:px-0 max-w-md sm:max-w-2xl hero-break-1:pl-14 hero-break-2:pl-0 hero-break-3:mr-[12rem]">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          {heading}
        </h2>
        <p className="sm:text-xl hero-break-1:text-2xl text-slate-600">
          {desc}
        </p>
        <button
          onClick={btnAction ? btnAction : undefined}
          className="text-white bg-primary hover:bg-slate-700 cursor-pointer px-[30px] py-[10px] rounded-md font-bold max-w-max focus-visible-state"
        >
          {btnTxt}
        </button>
      </div>
    </>
  );
};
