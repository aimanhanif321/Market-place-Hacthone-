'use client'; 
import React from 'react';
import SofaCard from '../(addtocart)/ProductList/page';
import Products2 from '../../components/AllData/page';
import { useRouter } from 'next/navigation';  // Use next/navigation

const Sofa = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/Shop");  // Navigate to the "/shop" page
  };

  return (
    <div>
      <div>
        <div id='' className='mt-10'>
          <h1 className="heading ">Our Products</h1>
          <div className='mt-10 relative w-[95%] md:w-[90%] lg:w-[80%] xl:w-[80%] justify-center mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
            {Products2.map((list) => {
              return (
                <div key={list.id}>
                  <SofaCard list={list} />
                </div>
              );
            })}
          </div>

          {/* Use the ShopButton component */}
          <div className="w-full flex justify-center items-center">
            <button
              onClick={handleClick}
              className="w-[240px] h-[48px] font-poppins text-[600] border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white"
            >
              Shop More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sofa;

















