// app/api/create-payment-intent/route.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { amount } = await request.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
