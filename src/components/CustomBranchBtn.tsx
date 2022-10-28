import React from 'react';

interface CustomBranchBtnProps {
  text: string;
  style?: string;
}

export const CustomBranchBtn: React.FC<CustomBranchBtnProps> = ({
  text,
  style,
}) => {
  return (
    <button
      className={`flex flex-row gap-6 flex-nowrap items-center justify-start w-max font-serif font-bold hover:text-slate-600 transition-all smooth-transition text-sm ${style}`}
    >
      {/* icon */}
      <svg
        aria-hidden="true"
        width="15"
        height="15"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="15.5" fill="white" stroke="#1ABC00" />
        <circle cx="16" cy="16" r="12" fill="#1ABC00" />
      </svg>
      {/* Text */}
      {text}
    </button>
  );
};
