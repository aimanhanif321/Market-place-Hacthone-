




// "use client";
// import Image from "next/image";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setBillingDetails,
//   clearOrder,
//   setOrderPlaced,
//   setOrderDetails,
// } from "../(addtocart)/redux/Features/OrderSlice";
// import { RootState } from "../../app/(addtocart)/redux/store";
// import { saveOrderToSanity } from "../../sanity/lib/data"; // Sanity save function import
// import { useState } from "react";
// import Feature from "@/components/Feature/page";
// import { CartItem } from "../(addtocart)/redux/Features/CartSlice";

// const CheckoutPage = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart.items);

//   const [form, setForm] = useState({
//     firstName: " ",
//     lastName: " ",
//     address: " ",
//     city: " ",
//     province: " ",
//     zip: " ",
//     phone: " ",
//     email: " ",
//   });

//   const [receiptGenerated, setReceiptGenerated] = useState(false);
//   const [orderNumber, setOrderNumber] = useState(""); // Order ID
//   const [totalAmount, setTotalAmount] = useState(0); // Total Amount

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };


//   const handleSubmit = async () => {
//     if (!form.firstName || !form.lastName || !form.email || !form.address) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     const total = subtotal; // Adjust if needed

//     const orderData = {
//       _type: "order", // This must match your Sanity schema
//       customerInfo: form,
//       cartItems,
//       totalAmount: total,
//       subtotal,
//       orderId: "",
//       orderDate: new Date().toISOString(),
//       status: "pending",
//     };

//     try {
//       const savedOrder = await saveOrderToSanity(orderData);

//       setOrderNumber(savedOrder?._id || "N/A");
//       setTotalAmount(total);

//       dispatch(setBillingDetails({ ...form, cartItems}));
//       dispatch(setOrderDetails(orderData));
//       dispatch(clearOrder());
//       dispatch(setOrderPlaced(true));

//       setReceiptGenerated(true);

//       alert("Order placed successfully!");
//     } catch (error) {
//       console.error("Error saving order:", error);
//       alert("Failed to place order. Please try again.");
//     }
//   };

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       <div>
//         <Image
//           src="/images/check.png"
//           alt="checkout"
//           width={1440}
//           height={316}
//           className="w-full h-auto mt-4"
//         />
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 lg:px-12 mt-16">
//         <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
//           {/* Left Side: Billing Form */}
//           <div className="w-full lg:w-[60%] bg-white p-6 rounded-lg shadow-md">
//             <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
//             {/* <div className="flex flex-wrap items-center justify-start gap-6">
//               {[
//                 { label: "First Name", name: "firstName" },
//                 { label: "Last Name", name: "lastName" },
//               ].map((field) => (
//                 <div key={field.name} className="w-full sm:w-[211px]">
//                   <label className="block text-sm font-medium text-gray-700">
//                     {field.label}
//                     <input
//                       type="text"
//                       name={field.name}
//                       value={(form as any)[field.name]}
//                       onChange={handleChange}
//                       className="mt-2 w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </label>
//                 </div>
//               ))}
//             </div> */}
//              <div className="flex flex-wrap items-center justify-start gap-6">
//           {[{ label: "First Name", name: "firstName" }, { label: "Last Name", name: "lastName" }].map(
//             (field) => (
//               <div key={field.name} className="w-full sm:w-[211px]">
//                 <label className="block text-sm font-medium text-gray-700">
//                   {field.label}
//                   <input
//                     type="text"
//                     name={field.name}
//                     value={form[field.name as keyof typeof form]} // Ensure TypeScript properly handles dynamic keys
//                     onChange={handleChange}
//                     className="mt-2 w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
//                   />
//                 </label>
//               </div>
//             )
//           )}
//           </div>
//             {/* <div className="mt-4">
//               {[
//                 { label: "Company Name (Optional)", name: "company" },
//                 { label: "Street Address", name: "address" },
//                 { label: "Town / City", name: "city" },
//                 { label: "Province", name: "province" },
//                 { label: "ZIP Code", name: "zip" },
//                 { label: "Phone", name: "phone" },
//                 { label: "Email Address", name: "email" },
//               ].map((field) => (
//                 <div key={field.name} className="mt-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     {field.label}
//                     <input
//                       type={field.name === "email" ? "email" : "text"}
//                       name={field.name}
//                       value={(form as any)[field.name]}
//                       onChange={handleChange}
//                       className="mt-2 w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
//                     />
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div> */}
//            <div className="mt-4">
//           {[
//             { label: "Company Name (Optional)", name: "company" },
//             { label: "Street Address", name: "address" },
//             { label: "Town / City", name: "city" },
//             { label: "Province", name: "province" },
//             { label: "ZIP Code", name: "zip" },
//             { label: "Phone", name: "phone" },
//             { label: "Email Address", name: "email" },
//           ].map((field) => (
//             <div key={field.name} className="mt-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 {field.label}
//                 <input
//                   type={field.name === "email" ? "email" : "text"}
//                   name={field.name}
//                   value={form[field.name as keyof typeof form]} // Ensure controlled input
//                   onChange={handleChange}
//                   className="mt-2 w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
//                 />
//               </label>
//             </div>
//           ))}
//         </div>
//         </div>

//           {/* Right Side: Order Summary */}
//           <div className="w-full lg:w-[35%] bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-[24px] font-semibold mb-6">Order Summary</h2>
//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex justify-between">
//                   <span className="text-gray-600">
//                     {item.title} (x{item.quantity})
//                   </span>
//                   <span className="text-gray-900 font-medium">
//                     Rs. {item.price * item.quantity}
//                   </span>
//                 </div>
//               ))}
//               <div className="border-t border-gray-300 mt-4 pt-4">
//                 <div className="flex justify-between text-lg font-semibold">
//                   <span>Total</span>
//                   <span>Rs. {totalAmount}</span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={handleSubmit}
//               className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//       <Feature/>
//     </div>

//   );
// };

// export default CheckoutPage;













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
import { useState, useEffect } from "react";
import Feature from "@/components/Feature/page";
import { CartItem } from "../(addtocart)/redux/Features/CartSlice";
import { Order } from "../(addtocart)/redux/Features/OrderSlice";
import { setCartItems } from "../(addtocart)/redux/Features/CartSlice"; // Adjust path if needed
// Define types for form data
interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
}



const CheckoutPage = () => {
  const dispatch = useDispatch();
  
  // Get cart items from Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // State to store the form data
  const [form, setForm] = useState<FormData>({
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
  const [orderNumber, setOrderNumber] = useState(""); 
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate total amount based on cart items
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 
      0
    );
    setTotalAmount(subtotal);
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    // Required fields ko check kar rahe hain
    if (!form.firstName || !form.lastName || !form.email || !form.address) {
      alert("Please fill in all required fields."); // Agar koi required field empty hai to alert dikha rahe hain
      return;
    }
  

const orderData: Order = {
  billingDetails: form, // Set billing details from the form
  CartItems: cartItems, // Set CartItems from the Redux state
  orderDetails: {
    orderId: "", // Order ID will be set after saving to Sanity
    status: "pending", // Initial order status
  },
  orderPlaced: false, // Set to false initially, will be updated after placing the order
};
  
    try {
      // Sanity mein order save kar rahe hain
      const savedOrder = await saveOrderToSanity(orderData);
  
      // Order ka unique ID set kar rahe hain, agar saveOrder mein ID milti hai to wo set karenge
      setOrderNumber(savedOrder?._id || "N/A");
  
      // Redux ke store mein billing details ko dispatch kar rahe hain
    // Dispatch billing details (without cartItems)
    dispatch(setBillingDetails({ ...form }));  // Only dispatch form data for billingDetails

    // Dispatch cartItems to Redux (use setCartItems or appropriate action)
    dispatch(setCartItems(cartItems));  // Dispatch cartItems separately to the appropriate slice

  
      // Order details ko dispatch kar rahe hain
      dispatch(setOrderDetails(orderData.orderDetails));
  
      // Cart ko clear kar rahe hain
      dispatch(clearOrder());
  
      // Order placed ko true kar rahe hain
      dispatch(setOrderPlaced(true));
  
      // Receipt generate hone ka flag true kar rahe hain
      setReceiptGenerated(true);
      alert("Order placed successfully!"); // Success alert
    } catch (error) {
      console.error("Error saving order:", error); // Agar order save nahi ho raha to error log kar rahe hain
      alert("Failed to place order. Please try again."); // Failure alert
    }
  };
  

  return (
    <div className="bg-gray-50">
           {/* Hero Section */}
           <div>
             <Image
              src="/images/check.png"
              alt="checkout"
              width={1440}
              height={316}
              className="w-full h-auto mt-4"
            />
          </div>
    
          {/* Main Content */}
          <div className="container mx-auto px-4 lg:px-12 mt-16">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
              {/* Left Side: Billing Form */}
              <div className="w-full lg:w-[60%] bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
                {/* <div className="flex flex-wrap items-center justify-start gap-6">
                  {[
                    { label: "First Name", name: "firstName" },
                    { label: "Last Name", name: "lastName" },
                  ].map((field) => (
                    <div key={field.name} className="w-full sm:w-[211px]">
                      <label className="block text-sm font-medium text-gray-700">
                        {field.label}
                        <input
                          type="text"
                          name={field.name}
                          value={(form as any)[field.name]}
                          onChange={handleChange}
                          className="mt-2 w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </label>
                    </div>
                  ))}
                </div> */}
                 <div className="flex flex-wrap items-center justify-start gap-6">
              {[{ label: "First Name", name: "firstName" }, { label: "Last Name", name: "lastName" }].map(
                (field) => (
                  <div key={field.name} className="w-full sm:w-[211px]">
                    <label className="block text-sm font-medium text-gray-700">
                      {field.label}
                      <input
                        type="text"
                        name={field.name}
                        value={form[field.name as keyof typeof form]} // Ensure TypeScript properly handles dynamic keys
                        onChange={handleChange}
                        className="mt-2 w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </label>
                  </div>
                )
              )}
              </div>
                {/* <div className="mt-4">
                  {[
                    { label: "Company Name (Optional)", name: "company" },
                    { label: "Street Address", name: "address" },
                    { label: "Town / City", name: "city" },
                    { label: "Province", name: "province" },
                    { label: "ZIP Code", name: "zip" },
                    { label: "Phone", name: "phone" },
                    { label: "Email Address", name: "email" },
                  ].map((field) => (
                    <div key={field.name} className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">
                        {field.label}
                        <input
                          type={field.name === "email" ? "email" : "text"}
                          name={field.name}
                          value={(form as any)[field.name]}
                          onChange={handleChange}
                          className="mt-2 w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div> */}
               <div className="mt-4">
              {[
                { label: "Company Name (Optional)", name: "company" },
                { label: "Street Address", name: "address" },
                { label: "Town / City", name: "city" },
                { label: "Province", name: "province" },
                { label: "ZIP Code", name: "zip" },
                { label: "Phone", name: "phone" },
                { label: "Email Address", name: "email" },
              ].map((field) => (
                <div key={field.name} className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                    <input
                      type={field.name === "email" ? "email" : "text"}
                      name={field.name}
                      value={form[field.name as keyof typeof form]} // Ensure controlled input
                      onChange={handleChange}
                      className="mt-2 w-full h-[48px] border border-gray-300 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </label>
                </div>
              ))}
            </div>
            </div>
    
              {/* Right Side: Order Summary */}
              <div className="w-full lg:w-[35%] bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-[24px] font-semibold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="text-gray-600">
                        {item.title} (x{item.quantity})
                      </span>
                      <span className="text-gray-900 font-medium">
                        Rs. {item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-gray-300 mt-4 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>Rs. {totalAmount}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          <Feature/>
        </div>
    
      );
    };
    
export default CheckoutPage;
