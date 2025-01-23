import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Feature from '../../components/Feature/page';

const Blog = () => {
  return (
    <>
      {/* Banner Section */}
      <div>
        <Image
          src={"/images/blog.png"}
          alt="blog"
          width={1440}
          height={316}
          className="w-full h-auto "
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-1/2 lg:ml-12">
          {/* Blog Post 1 */}
          <Image
            src={"/images/b1.png"}
            alt="la"
            width={817}
            height={500}
            className="mt-8 lg:mt-28 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src={"/images/bicon.png"} alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={"/images/bicon2.png"} alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src={"/images/bicon3.png"} alt="wood-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 2 */}
          <Image
            src={"/images/b2.png"}
            alt="dmg"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src={"/images/bicon.png"} alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={"/images/bicon2.png"} alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src={"/images/bicon3.png"} alt="wood-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 3 */}
          <Image
            src={"/images/b3.png"}
            alt="books-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src={"/images/bicon.png"} alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={"/images/bicon2.png"} alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src={"/images/bicon3.png"} alt="wood-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          {/* Search Bar */}
          <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
            <Search/>
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10 mb-5">Categories</h1>
          <div className="space-y-4 lg:space-y-6">
            {[
              { name: 'Crafts', count: 2 },
              { name: 'Design', count: 8 },
              { name: 'Handmade', count: 7 },
              { name: 'Interior', count: 1 },
              { name: 'Wood', count: 6 },
            ].map((category) => (
              <div key={category.name} className="flex justify-between text-sm lg:text-base">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <h1 className="text-[24px] font-semibold mb-8 lg:mt-20">Recent Posts</h1>
          {[
            { src: '/images/b4.png', title: 'Going all-in with millennial design' },
            { src: '/images/b5.png', title: 'Exploring new ways of decorating' },
            { src: '/images/b6.png', title: 'Handmade pieces that took time to make' },
            { src: '/images/b7.png', title: 'Modern home in Milan' },
            { src: '/images/b8.png', title: 'Colorful office redesign' },
          ].map((post, index) => (
            <div key={index} className="flex items-center justify-between gap-8">
              <Image src={post.src} alt={`post${index + 1}`} width={80} height={80} className='mb-5'/>
              <div className="flex flex-col">
                <h1 className="font-semibold text-[14px] w-[119px]">{post.title}</h1>
                <span className="text-[#9F9F9F]">03 Aug 2022</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 lg:gap-8 ">
        {['1', '2', '3', 'Next'].map((item) => (
          <div
            key={item}
            className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center ${item === '1' ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'
              }`}
          >
            {item}
          </div>
        ))}
      </div>
      <Feature/>
    </>
  );
};

export default Blog;