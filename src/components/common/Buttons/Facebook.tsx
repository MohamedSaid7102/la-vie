import React from 'react';

interface FacebookProps {}

export const Facebook: React.FC<FacebookProps> = ({}) => {
  return (
    <>
      <button className="text-icon-btn">
        {/* Icon */}
        <svg
          width="28"
          height="41"
          viewBox="0 0 28 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2131 23.8358V41H8.06382V23.8358H0.462891V16.8761H8.06382V14.3439C8.06382 4.94305 12.6209 0 22.2628 0C25.2187 0 25.9577 0.409394 27.5764 0.742973V7.62685C25.7641 7.35392 25.2539 7.20229 23.3712 7.20229C21.1367 7.20229 19.9403 7.74815 18.8494 8.8247C17.7585 9.90126 17.2131 11.7663 17.2131 14.4349V16.8913H27.5764L24.7964 23.851H17.2131V23.8358Z"
            fill="#337FFF"
          />
        </svg>
        {/* Test */}
        <span>Continue with Google</span>
      </button>
    </>
  );
};
