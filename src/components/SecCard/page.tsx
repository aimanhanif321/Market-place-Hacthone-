import React from 'react'
import Image from 'next/image';
type props ={
    decoretion:{
        id:number;
        title:string;
        image:string;


    };
};

const SecCard= ({ decoretion } : props) => {
    const {image,title} = decoretion;
  return (
   
        // <div className=' cursor-pointer text-center mx-auto w-[1183px] h-[446px] mb-20 bg-[#EAECF0]'>
      <div className='  cursor-pointer text-center rounded-lg '>   
      <div className='   rounded-lg '> <Image src={image} alt={title} height={100} width={1000}  className=" rounded-lg  object-cover "/></div>
         
          <h1 className='heading2 pt-5'>{title}</h1>
         
          
        </div>
    
  )
}

export default SecCard;
