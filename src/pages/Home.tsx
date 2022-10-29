import React from 'react';
import { Hero } from '../components/Hero';
import { CategoriesSection } from '../components/CategoriesSection';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <div className="relative max-w-[2000px] m-auto">
        {/* deoration */}
        <img
          src="/src/assets/images/home-bg-decoration.png"
          alt="decoration squares image"
          className="absolute top-[-90px] right-0 pointer-events-none"
        />
        {/* Content */}
        <Hero />
        <CategoriesSection />
      </div>
    </>
  );
};
