import React from 'react'
import SecCard from '../SecCard/page';
import { products1 } from '../AllData/page';
  
  const SecPart = () => {
  
  
    return (
      <div id="browse-range" className="px-4 py-10 bg-white">
        <h1 className="heading text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-10">Browse The Range</h1>
        <p className="heading2 text-center text-[#666666] text-base sm:text-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <div className='mt-10  w-[50%]  md:w-[50%] lg:w-[60%] xl:[70%] gap-6 justify-center mx-auto grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  items-center'>
          {products1.map((decoretion) => (
            <SecCard key={decoretion.id} decoretion={decoretion} />
          ))}
        </div>
      </div>
    );
  
  
 
}

export default SecPart
