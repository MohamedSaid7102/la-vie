import React, { MouseEventHandler, ReactElement } from 'react';

interface BlogProps {
  imageURL: string;
  heading: string;
  desc: string;
  time: string;
}

export const Blog: React.FC<BlogProps> = ({
  imageURL,
  heading,
  desc,
  time,
}) => {
  return (
    <div className="flex flex-col gap-[0.5rem] sm:min-w-[25rem] min-w-[15rem] shadow-xl h-max rounded-lg sm:pb-[1rem] pb-[3rem]">
      <img src={imageURL} alt="plant image" />
      <div className="px-[1rem] flex flex-col gap-[0.6rem]">
        <span className="text-primary font-light">{time}</span>
        <h3 className="font-bold text-lg sm:text-2xl">{heading}</h3>
        <p className="text-slate-500 sm:text-xl">{desc}</p>
      </div>
    </div>
  );
};
