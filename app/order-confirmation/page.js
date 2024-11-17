// app/order-confirmation/page.js
"use client";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

const OrderConfirmationPage = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Order Confirmation"} />
      <section className="confirmation-section section-padding">
        <div className="container">
          <div className="confirmation-content text-center">
            <h2>Your Order Has Been Successfully Received!</h2>
            <p>
              Thank you for your purchase. We are processing your order and will
              notify you once it's ready.
            </p>
            <div className="mt-4">
              <Link href="/" className="theme-btn">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
};

export default OrderConfirmationPage;
