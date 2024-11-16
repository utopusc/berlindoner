// app/checkout/page.js
"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleInputChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // Send payment request to server
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: (totalPrice + 10) * 100 }), // Adding $10 shipping
      });

      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${billingDetails.firstName} ${billingDetails.lastName}`,
            email: billingDetails.email,
            phone: billingDetails.phone,
            address: {
              line1: billingDetails.address,
              city: "San Francisco",
              state: "CA",
              country: "US",
            },
          },
        },
      });

      if (result.error) {
        // Show error to customer
        console.log(result.error.message);
        alert(`Payment failed: ${result.error.message}`);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          // Payment successful
          alert("Your payment was successful!");
          clearCart(); // Clear the cart
          // Redirect the user if necessary
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-4">
        {/* Billing Address Section */}
        <div className="col-md-7">
          <div className="checkout-single-wrapper">
            <div className="checkout-single boxshado-single">
              <h4>Billing Address</h4>
              <div className="checkout-single-form">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="input-single">
                      <input
                        type="text"
                        name="firstName"
                        id="userFirstName"
                        required
                        placeholder="First Name"
                        value={billingDetails.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-single">
                      <input
                        type="text"
                        name="lastName"
                        id="userLastName"
                        required
                        placeholder="Last Name"
                        value={billingDetails.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-single">
                      <input
                        type="email"
                        name="email"
                        id="userEmail"
                        required
                        placeholder="Your Email"
                        value={billingDetails.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-single">
                      <input
                        type="tel"
                        name="phone"
                        id="userPhone"
                        required
                        placeholder="Phone Number"
                        value={billingDetails.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-single">
                      <textarea
                        name="address"
                        id="userAddress"
                        placeholder="Address"
                        required
                        value={billingDetails.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Methods Section */}
            <div className="checkout-single checkout-single-bg">
              <h4>Payment Information</h4>
              <div className="checkout-single-form">
                <div className="row g-3">
                  <div className="col-lg-12">
                    <div className="input-single">
                      <label htmlFor="cardElement">Card Details</label>
                      <div className="card-element">
                        <CardElement options={{ hidePostalCode: true }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-single input-check payment-save">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="save-for-next"
                  id="saveForNext"
                />
                <label htmlFor="saveForNext">Save for my next payment</label>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="theme-btn border-radius-none"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Pay Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Order Summary Section */}
        <div className="col-md-5">
          <div className="order-summary">
            <h4>Your Order</h4>
            <div className="order-products">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="order-product d-flex justify-content-between"
                >
                  <div className="order-product-name">
                    {item.name} x {item.quantity}
                  </div>
                  <div className="order-product-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            <div className="order-total mt-4">
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total</strong>
                <strong>${(totalPrice + 10).toFixed(2)}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Checkout"} />
      <section className="checkout-section fix section-padding border-bottom">
        <div className="container">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
