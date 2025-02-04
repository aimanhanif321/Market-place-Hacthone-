// pages/api/payment-status/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-01-27.acacia",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query; // Get payment intent ID from the URL

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid payment intent ID' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(id);

    res.status(200).json({ status: paymentIntent.status });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve payment status' });
  }
}
