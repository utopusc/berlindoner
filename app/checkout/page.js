// app/checkout/page.js
"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutForm = () => {
  const {
    cartItems,
    clearCart,
    couponCode,
    isCouponApplied,
    discountPercentage,
    applyCoupon,
    clearCoupon,
    calculateTotalPrice,
    totalPrice, // Total price before discount
  } = useContext(CartContext);
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [couponInput, setCouponInput] = useState("");
  const [couponMessage, setCouponMessage] = useState(""); // Added state for coupon messages
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter(); // Added useRouter

  const handleInputChange = (e) => {
    setBillingDetails({ ...billingDetails, [e.target.name]: e.target.value });
  };

  const handleApplyCoupon = () => {
    const validCouponCode = process.env.NEXT_PUBLIC_COUPON_CODE;
    const discount = parseFloat(process.env.NEXT_PUBLIC_DISCOUNT_PERCENTAGE);

    if (couponInput.trim().toUpperCase() === validCouponCode.toUpperCase()) {
      applyCoupon(validCouponCode, discount);
      setCouponMessage("Coupon applied successfully!");
    } else {
      setCouponMessage("Invalid coupon code.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // Calculate total amount in cents (including discount and shipping)
      const totalAmount = (calculateTotalPrice() + 10) * 100; // Added $10 shipping fee

      // Send payment request to server
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }),
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
          clearCart(); // Clear cart (coupon info will also be cleared)
          // Redirect the user to the confirmation page
          router.push("/order-confirmation");
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
                        placeholder="Email"
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
                  {/* Coupon Code Section */}
                  <div className="col-lg-12">
                    <div
                      className="input-single"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <input
                        type="text"
                        name="promo-code"
                        id="promoCode"
                        placeholder="Coupon Code"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        disabled={isCouponApplied}
                        style={{
                          color: "#000",
                          flex: 1,
                          marginRight: "10px",
                        }}
                      />
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        disabled={isCouponApplied}
                        style={{ padding: "8px 16px" }}
                      >
                        {isCouponApplied ? "Applied" : "Apply"}
                      </button>
                      {isCouponApplied && (
                        <button
                          type="button"
                          onClick={() => {
                            clearCoupon();
                            setCouponMessage("");
                            setCouponInput("");
                          }}
                          style={{ padding: "8px 16px", marginLeft: "10px" }}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    {couponMessage && (
                      <div
                        style={{
                          color: isCouponApplied ? "green" : "red",
                          marginTop: "5px",
                        }}
                      >
                        {couponMessage}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Information Section */}
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
              {isCouponApplied && (
                <div className="d-flex justify-content-between">
                  <span>Discount ({discountPercentage}%)</span>
                  <span>
                    -${((totalPrice * discountPercentage) / 100).toFixed(2)}
                  </span>
                </div>
              )}
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total</strong>
                <strong>${(calculateTotalPrice() + 10).toFixed(2)}</strong>
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
