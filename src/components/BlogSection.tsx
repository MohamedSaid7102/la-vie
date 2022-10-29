import React from 'react';
import { Blog as BlogCard } from '@components/';
interface BlogSectionProps {}

export const BlogSection: React.FC<BlogSectionProps> = ({}) => {
  return (
    <>
      <div className="mt-[5rem] sm:mt-[10rem] max-w-[2000px] flex flex-col gap-[3rem] sm:gap-[7rem] sm:px-[7rem] pl-7">
        <h2 className="font-[900] text-4xl sm:text-7xl relative w-max">
          Best seller{' '}
          <span className="absolute sm:top-[-30px] sm:right-[-4.5rem] top-[-15px] right-[-3rem] font-extralight">
            __
          </span>
        </h2>
        {/* Horizontally Scrolling gallery */}
        {/* Card container */}
        <div
          className="flex flex-row flex-nowrap gap-10 overflow-x-auto px-[3rem]
		sm:min-h-[40rem] odd:mt-12 py-4 items-center focus-visible-state"
        >
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p10.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p1.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p3.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p10.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p1.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p3.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p10.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p1.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p3.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p10.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p1.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
          {/* Blog Card */}
          <BlogCard
            imageURL="/assets/images/p3.png"
            heading="5 simple tips treat plant"
            desc="leaf, in botany, any usually flattened green outgrowth from the stem of "
            time="2 days ago"
          />
        </div>
      </div>
    </>
  );
};
