import React from 'react';
import { Hero } from '../components/Hero';
import { CategoriesSection } from '../components/CategoriesSection';
import { BestSellerSection } from '../components/common/BestSellerSection';
import { BlogSection } from '../components/BlogSection';
import { AboutUs } from '../components/AboutUsSection';
import { MobileAppSection } from '../components/MobileAppSection';
import { Footer } from '../components/common/Footer';

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
        <BestSellerSection />
        <BlogSection />
        <AboutUs />
        <MobileAppSection />
        <Footer />
      </div>
    </>
  );
};
