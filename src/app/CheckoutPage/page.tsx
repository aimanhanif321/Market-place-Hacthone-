









// import React from "react";
// import Image from "next/image";
// import Feature from "../../components/Feature/page";

// const CheckoutPage = () => {
//   return (
//     <>
//       <div>
//         <Image
//           src={"/images/check.png"}
//           alt="checkout"
//           width={1440}
//           height={316}
//           className="w-full h-auto mt-4"
//         />
//       </div>
//       <div className="container mx-auto px-4 lg:px-12 mt-16">
//         <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
//           {/* Left Side: Billing Form */}
//           <div className="w-full lg:w-[60%]">
//             <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
//             <div className="flex flex-wrap items-center justify-start gap-6">
//               <div className="w-full sm:w-auto">
//                 <label>
//                   First Name
//                   <br />
//                   <input
//                     type="text"
//                     className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
//                   />
//                 </label>
//               </div>
//               <div className="w-full sm:w-auto">
//                 <label>
//                   Last Name
//                   <br />
//                   <input
//                     type="text"
//                     className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
//                   />
//                 </label>
//               </div>
//             </div>
//             <br />
//             Company Name (Optional)
//             <br />
//             <br />
//             <input
//               type="text"
//               className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//             />
//             <br />
//             <br />
//             Country / Region
//             <br />
//             <br />
//             <div className="relative w-full lg:w-[453px] h-[75px]">
//               <input
//                 type="text"
//                 className="w-full h-full border border-black rounded-md pl-4 pr-10"
//               />
//               <Image
//                 src={"/images/do1.png"}
//                 alt="arrow-icon"
//                 width={20}
//                 height={20}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2"
//               />
//             </div>
//             <br />
//             Street address
//             <br />
//             <br />
//             <input
//               type="text"
//               className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//             />
//             <br />
//             <br />
//             Town / City
//             <br />
//             <br />
//             <input
//               type="text"
//               className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//             />
//             <br />
//             <br />
//             Province
//             <br />
//             <br />
//             <div className="relative w-full lg:w-[453px] h-[75px]">
//               <input
//                 placeholder="Western Province"
//                 type="text"
//                 className="w-full h-full border border-black rounded-md pl-4 pr-10 text-[#9F9F9F]"
//               />
//               <Image
//                 src={"/images/do1.png"}
//                 alt="arrow-icon"
//                 width={20}
//                 height={20}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2"
//               />
//             </div>
//             <br />
//             ZIP code
//             <br />
//             <br />
//             <input
//               type="text"
//               className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//             />
//             <br />
//             <br />
//             Phone
//             <br />
//             <br />
//             <input
//               type="text"
//               className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//             />
//             <br />
//             <br />
//             Email address
//             <br />
//             <br />
//             <input
//               type="text"
//               className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
//             />
//             <br />
//             <br />
//             Additional information
//             <br />
//             <br />
//             <input
//               placeholder="Additional information"
//               type="text"
//               className="w-full lg:w-[453px] h-[75px] border border-black rounded-md text-[#9F9F9F] pl-4"
//             />
//           </div>

//           {/* Right Side: Order Summary */}
//           <div className="w-full lg:w-[35%]">
//             <div className="flex items-start justify-between">
//               <div className="flex flex-col gap-3">
//                 <h2 className="text-[24px] font-semibold">Product</h2>
//                 <p className="text-[#9F9F9F]">
//                   Asgaard sofa <span className="text-black">X 1</span>
//                 </p>
//                 <span className="font-semibold">Subtotal</span>
//                 <span className="font-semibold">Total</span>
//               </div>
//               <div className="flex flex-col gap-3 text-right">
//                 <h2 className="text-[24px] font-semibold">Subtotal</h2>
//                 <span>Rs. 250,000.00</span>
//                 <span>Rs. 250,000.00</span>
//                 <span className="text-[#B88E2F] text-[24px] font-semibold">
//                   Rs. 250,000.00
//                 </span>
//               </div>
//             </div>
//             <div className="border-b border-[#D9D9D9] w-full mt-6"></div>
//             <div className="mt-8">
//               <div className="flex items-center gap-3">
//                 <div className="bg-black rounded-full w-[14px] h-[14px]"></div>
//                 <h1 className="text-[20px] font-semibold">
//                   Direct Bank Transfer
//                 </h1>
//               </div>
//               <p className="text-[#9F9F9F] mt-2">
//                 Make your payment directly into our bank account. Please use
//                 your Order ID as the payment reference. Your order will not be
//                 shipped until the funds have cleared in our account.
//               </p>
//               <div className="flex items-center gap-3 mt-6">
//                 <div className="border border-[#9F9F9F] rounded-full w-[14px] h-[14px]"></div>
//                 <h1 className="text-[18px] font-semibold text-[#9F9F9F]">
//                   Cash On Delivery
//                 </h1>
//               </div>
//             </div>
//             <div className="mt-10">
//               <button className="w-full lg:w-[318px] h-[64px] border border-black rounded-2xl">
//                 Place order
//               </button>
//             </div>
//           </div>
//         </div>
//         <Feature />
//       </div>
//     </>
//   );
// };

// export default CheckoutPage;
// import React, { useState } from "react";
// 









"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setBillingDetails,
  clearOrder,
  setOrderPlaced,
  setOrderDetails,
} from "../(addtocart)/redux/Features/OrderSlice";
import { RootState } from "../../app/(addtocart)/redux/store";
import { saveOrderToSanity } from "../../sanity/lib/data"; // Sanity save function import
import { useState } from "react";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [receiptGenerated, setReceiptGenerated] = useState(false);
  const [orderNumber, setOrderNumber] = useState(""); // Order ID
  const [totalAmount, setTotalAmount] = useState(0); // Total Amount

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.lastName || !form.email || !form.address) {
      alert("Please fill in all required fields.");
      return;
    }

    // Calculate totals
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const total = subtotal; // Adjust if there are additional charges

    // Prepare order data
    const orderData = {
      customerInfo: form,
      cartItems,
      totalAmount: total,
      subtotal,
      orderId: '',
      orderDate: new Date().toISOString(),
      status: "pending", // Default status
    };

    try {
      // Save the order to Sanity
      const savedOrder = await saveOrderToSanity(orderData);

      // Set order details
      setOrderNumber(savedOrder?._id || "N/A");
      setTotalAmount(total);

      // Dispatch data to Redux
      dispatch(setBillingDetails({ ...form, cartItems }));
      dispatch(setOrderDetails(orderData));
      dispatch(clearOrder());
      dispatch(setOrderPlaced(true));

      // Generate receipt
      setReceiptGenerated(true);

      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <>
      <div>
        <Image
          src={"/images/check.png"}
          alt="checkout"
          width={1440}
          height={316}
          className="w-full h-auto mt-4"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-12 mt-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Side: Billing Form */}
          <div className="w-full lg:w-[60%]">
            <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
            <div className="flex flex-wrap items-center justify-start gap-6">
              <div className="w-full sm:w-auto">
                <label>
                  First Name
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
                  />
                </label>
              </div>
              <div className="w-full sm:w-auto">
                <label>
                  Last Name
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full sm:w-[211px] h-[75px] border border-black rounded-md mt-2"
                  />
                </label>
              </div>
            </div>
            <br />
            <label>
              Address
              <br />
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
            </label>
            <br />
            <label>
              City
              <br />
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
            </label>
            <br />
            <label>
              Province
              <br />
              <input
                type="text"
                name="province"
                value={form.province}
                onChange={handleChange}
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
            </label>
            <br />
            <label>
              ZIP Code
              <br />
              <input
                type="text"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
            </label>
            <br />
            <label>
              Phone
              <br />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
            </label>
            <br />
            <label>
              Email
              <br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full lg:w-[453px] h-[75px] border border-black rounded-md"
              />
            </label>
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full lg:w-[35%]">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <h2 className="text-[24px] font-semibold">Product</h2>
                {cartItems.map((item: any) => (
                  <p key={item.id} className="text-[#9F9F9F]">
                    {item.name} <span className="text-black">X {item.quantity}</span>
                  </p>
                ))}
                <span className="font-semibold">Subtotal</span>
                <span className="font-semibold">Total</span>
              </div>
              <div className="flex flex-col gap-3 text-right">
                <h2 className="text-[24px] font-semibold">Order Summary</h2>
                {cartItems.map((item: any) => (
                  <p key={item.id} className="text-[#9F9F9F]">
                    {item.price} X {item.quantity}
                  </p>
                ))}
                <span className="font-semibold">{totalAmount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Receipt */}
        {receiptGenerated && (
          <div className="mt-10">
            <h2 className="text-xl font-bold">Order Receipt</h2>
            <p>Order Number: {orderNumber}</p>
            <p>Total: ${totalAmount}</p>
          </div>
        )}

        {/* Place Order Button */}
        <button onClick={handleSubmit} className="bg-black text-white px-8 py-4 mt-8">
          Place Order
        </button>
      </div>
    </>
  );
};

export default CheckoutPage;
