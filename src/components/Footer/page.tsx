import React from "react";

const Footer = () => {
  return (

    <div className="mt-20">
  <div className="font-poppins h-auto w-full max-w-7xl mx-auto border-b border-t md:flex md:justify-center md:items-center">
    <div className="w-full md:w-[1133px] bg-white p-6 md:h-[312px] md:flex gap-10 md:gap-[87px] justify-between">
      <div className="mb-6 md:mb-0">
        <h1 className="text-[20px] md:text-[24px] font-bold pb-4 md:pb-10">Funiro</h1>
        <p className="text-[14px] md:text-[16px] w-full md:w-[200px]">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>
      </div>
      <div className="mb-6 md:mb-0">
        <h1 className="text-[16px] md:text-[18px] heading4 font-bold pb-4 md:pb-10">Links</h1>
        <p className="text-[14px] md:text-[16px] font-[500] pb-2 md:pb-4">Home</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Shop</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">About</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Contact</p>
      </div>
      <div className="mb-6 md:mb-0">
        <h1 className="text-[16px] md:text-[18px] font-bold pb-4 md:pb-10 heading4">Help</h1>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Payments option</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Return</p>
        <p className="text-[14px] md:text-[16px] font-[500]  pb-2 md:pb-4">Private policy</p>
      </div>
      <div>
        <h1 className="text-[16px] md:text-[18px] font-bold pb-4 md:pb-10 heading4">Newsletter</h1>
        <div className="flex flex-col md:flex-row md:justify-start md:items-center gap-2 md:gap-4">
          <p className="text-[14px] md:text-[16px] underline heading4">Enter Your Email Address</p>
          <p className="text-[14px] md:text-[16px] font-semibold underline cursor-pointer">Subscribe</p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center items-center">
    <p className="w-full md:w-[1133px] text-[14px] md:text-[20px] mt-10  font-poppins">
      2023 Funiro. All rights reserved
    </p>
  </div>
</div>
  )
};

export default Footer;
