"use client"

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBillingDetails, clearOrder, setOrderPlaced, setOrderDetails } from "../(addtocart)/redux/Features/OrderSlice";
import { RootState } from "../../app/(addtocart)/redux/store";
import { CartItem } from "../(addtocart)/redux/Features/CartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm = ({ totalAmount, formData }: { totalAmount: number; formData: any }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: totalAmount * 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error fetching clientSecret:", error));
  }, [totalAmount]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setLoading(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement)! },
    });

    if (result.error) {
      console.error(result.error.message);
      alert("Payment failed!");
      setLoading(false);
    } else {
      alert("Payment successful!");
      router.push(`/order-confirmation/${result.paymentIntent.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="border p-2 rounded" />
      <button type="submit" disabled={!stripe || loading} className="bg-blue-500 text-white py-2 px-4 rounded">
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zip: "",
  });

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(subtotal);
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50">
      <div>
        <Image src="/images/check.png" alt="checkout" width={1440} height={316} className="w-full h-auto mt-4" />
      </div>
      <h2 className="text-6xl font-semibold  text-center mt-20">Billing Info</h2>

      {/* Form Inputs */}
      <div className="grid gap-4 p-20">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-2 rounded" />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border p-2 rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="province" placeholder="Province" value={formData.province} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="zip" placeholder="Zip" value={formData.zip} onChange={handleChange} className="border p-2 rounded" />
      </div>

      {/* Total Price */}
      <div className="mt-4">
        <h3 className="text-3xl font-semibold">Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>

      {/* Stripe Payment Form */}
      <Elements stripe={stripePromise}>
        <CheckoutForm totalAmount={totalAmount} formData={formData} />
      </Elements>
    </div>
  );
};

export default CheckoutPage;



// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setBillingDetails, clearOrder, setOrderPlaced, setOrderDetails } from "../(addtocart)/redux/Features/OrderSlice";
// import { RootState } from "../../app/(addtocart)/redux/store";
// import { CartItem } from "../(addtocart)/redux/Features/CartSlice";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";



// const CheckoutPage = () => {
//   const dispatch = useDispatch();
//   const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.items);
//   const router = useRouter();

//   // State for form data with all required BillingDetails properties
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     province: "",
//     zip: ""
//   });

//   // State for order
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [receiptGenerated, setReceiptGenerated] = useState(false);
//   const [orderNumber, setOrderNumber] = useState("");

//   useEffect(() => {
//     // Calculate total amount
//     const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     setTotalAmount(subtotal);
//   }, [cartItems]);

//   // Function to handle input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const generateOrderId = () => "ORD-" + Math.floor(Math.random() * 1000000);

//   const handleSubmit = async () => {
//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.city || !formData.province || !formData.zip) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     setIsLoading(true);

//     const orderData = {
//       billingDetails: formData,
//       cartItems: cartItems,
//       orderDetails: {
//         orderId: generateOrderId(),
//         status: "pending",
//       },
//       orderPlaced: false,
//     };

//     try {
//       const response = await fetch('/api/place-order', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(orderData),
//       });

//       if (!response.ok) throw new Error(`HTTP Error ${response.status}`);

//       const result = await response.json();

//       if (result.message === "Order placed successfully!") {
//         dispatch(setBillingDetails(formData));
//         dispatch(setOrderDetails({ ...orderData.orderDetails, orderId: result._id || orderData.orderDetails.orderId }));
//         dispatch(setOrderPlaced(true));
//         dispatch(clearOrder());

//         alert("Order placed successfully!");
//         setReceiptGenerated(true);
//         router.push(`/order-confirmation/${orderData.orderDetails.orderId}`);
//       } else {
//         alert("Failed to place order.");
//       }
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place order. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
    
//         <div className="bg-gray-50">
//        <div>
//         <Image src="/images/check.png" alt="checkout" width={1440} height={316} className="w-full h-auto mt-4" />
//       </div>
//       <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

//       {/* Form Inputs */}
//       <div className="grid gap-4">
//         <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-2 rounded" />
//         <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-2 rounded" />
//         <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border p-2 rounded" />
//         <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2 rounded" />
//         <input type="text" name="address" placeholder="Shipping Address" value={formData.address} onChange={handleChange} className="border p-2 rounded" />
//         <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2 rounded" />
//         <input type="text" name="province" placeholder="Province" value={formData.province} onChange={handleChange} className="border p-2 rounded" />
//         <input type="text" name="zip" placeholder="Zip" value={formData.zip} onChange={handleChange} className="border p-2 rounded" />
//       </div>

//       {/* Total Price */}
//       <div className="mt-4">
//         <h3 className="text-xl font-semibold">Total Amount: ${totalAmount.toFixed(2)}</h3>
//       </div>

//       {/* Submit Button */}
//       <button onClick={handleSubmit} disabled={isLoading} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
//         {isLoading ? "Processing..." : "Place Order"}
//       </button>
//     </div>
//   );
// };

// export default CheckoutPage;










