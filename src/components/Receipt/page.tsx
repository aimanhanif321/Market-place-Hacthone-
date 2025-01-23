import React from "react";
import { CartItem } from "../../app/(addtocart)/redux/types";

interface ReceiptProps {
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  items: CartItem[];
  totalAmount: number;
}

const Receipt: React.FC<ReceiptProps> = ({ customer, items, totalAmount }) => {
  return (
    <div className="p-6 border rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
      <p>
        <strong>Name:</strong> {customer.firstName} {customer.lastName}
      </p>
      <p>
        <strong>Email:</strong> {customer.email}
      </p>
      <p>
        <strong>Phone:</strong> {customer.phone}
      </p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Order Details</h3>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <span>{item.name} x {item.quantity}</span>
            <span>Rs. {item.price * item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between font-bold mt-4">
        <span>Total:</span>
        <span>Rs. {totalAmount}</span>
      </div>
    </div>
  );
};

export default Receipt;

