import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; 

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Get order data from request

    // Save order in Sanity
    const order = await client.create({
      _type: "order", // 👈 Make sure "order" schema exists in Sanity
      customerName: body.customerName,
      email: body.email,
      phone: body.phone,
      address: body.address,
      cartItems: body.cartItems, // Array of products
      totalPrice: body.totalPrice,
      status: "pending", // Default status
    });

    return NextResponse.json({ message: "Order placed successfully!", orderId: order._id }, { status: 200 });
  } catch (error) {
    console.error("Error saving order:", error);
    return NextResponse.json({ message: "Failed to place order" }, { status: 500 });
  }
}
