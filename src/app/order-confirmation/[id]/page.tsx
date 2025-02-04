// "use client"



// import { useRouter } from 'next/router';


// import { useEffect, useState } from 'react';

// export default function OrderConfirmation() {
//   const router = useRouter();
//   const [paymentStatus, setPaymentStatus] = useState<string>('');
 
//   const { id } = router.query; // Get the paymentIntent.id from the URL

//   useEffect(() => {
//     // Fetch the payment intent details from Stripe using the paymentIntent.id
//     async function fetchPaymentStatus() {
//       if (!id) return; // Ensure the id is available

//       const response = await fetch(`/api/payment-status/${id}`);
//       const data = await response.json();

//       setPaymentStatus(data.status);
//     }

//     fetchPaymentStatus();
//   }, [id]);

//   return (
//     <div>
//       <h1>Order Confirmation</h1>
//       <p>Payment Status: {paymentStatus}</p>
//       {paymentStatus === 'succeeded' && <p>Thank you for your purchase!</p>}
//       {paymentStatus === 'failed' && <p>Sorry, your payment was not successful. Please try again.</p>}
//     </div>
//   );
// }







"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function OrderConfirmation() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Get the paymentIntent ID from URL

  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // Simulating fetching payment status from API
      setTimeout(() => {
        setPaymentStatus("Payment Successful"); // Replace with actual API call
      }, 1000);
    }
  }, [id]);

  if (!id) {
    return <div>Loading...</div>; // Show until `id` is available
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <p className="text-lg">Payment Status: <span className="font-semibold">{paymentStatus || "Verifying..."}</span></p>
      <p className="text-lg">Your order was successful! 🎉</p>
      <p className="text-lg">Payment ID: <span className="text-blue-500">{id}</span></p>
    </div>
  );
}
