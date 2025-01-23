import React from 'react'

function Hero() {
  return (
    
    <div className="w-full">
      <div
        className=' md:h-[720px] sm:h-[500px] h-[400px] bg-[url("/images/bg.png")] bg-no-repeat bg-cover bg-center flex items-center md:pr-[280px] justify-end'
      >
        {/* Add your content here */}
       <div className='w-[300px] py-5 mr-5 md:w-[643px] md:h-[443px] flex items-center justify-center ml-4 bg-[#FFF3E3]'>
        <div  className='w-auto pl-4   md:w-[561px] md:h-[344px] '>
            <p className='font-poppins text-[10px] md:text-[14px] font-[500] md:tracking-widest'>New Arrival</p>
             <h1 className='font-poppins text-[22px] md:text-[52px] font-[600]  text-[#B88E2F] tracking-3pct'>Discover Our New Collection</h1>
             <p className='font-poppins text-[12px] md:text-[16px] font-[400] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
             <button className=' md:my-12 mt-4 font-poppins text-[12px] md:text-[16px] px-10 py-2  font-[600] bg-[#B88E2F] text-[white] md:px-[70px] md:py-[20px] md:leading-[24px]'>Buy Now </button>
        </div>
       </div>
      </div>
    </div>
  )
}


export default Hero
