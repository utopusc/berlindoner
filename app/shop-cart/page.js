// app/shop-cart/page.js
"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const page = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const calculateCartTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    if (isCouponApplied) {
      return subtotal - (subtotal * discountPercentage) / 100;
    }
    return subtotal;
  };

  const incrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const removeItem = (id) => {
    removeFromCart(id);
  };

  const applyCoupon = () => {
    const validCouponCode = process.env.NEXT_PUBLIC_COUPON_CODE;
    const discount = parseFloat(process.env.NEXT_PUBLIC_DISCOUNT_PERCENTAGE);

    if (couponCode.trim().toUpperCase() === validCouponCode.toUpperCase()) {
      setIsCouponApplied(true);
      setDiscountPercentage(discount);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code.");
    }
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop Cart"} />
      <section className="cart-section section-padding fix">
        <div className="container">
          <div className="main-cart-wrapper">
            {cartItems.length === 0 ? (
              <div className="empty-cart text-center my-5">
                <h2>Your Cart is Empty</h2>
                <Link href="/shop" className="theme-btn mt-3">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <>
                <div className="row">
                  <div className="col-12">
                    <div className="cart-wrapper">
                      <div className="cart-items-wrapper">
                        <table>
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Subtotal</th>
                              <th>Remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => (
                              <tr key={item.id} className="cart-item">
                                <td className="cart-item-info">
                                  <img src={item.image} alt={item.name} />
                                  <span>{item.name}</span>
                                </td>
                                <td className="cart-item-price">
                                  <span className="base-price">
                                    ${item.price.toFixed(2)}
                                  </span>
                                </td>
                                <td>
                                  <div className="cart-item-quantity">
                                    <span className="cart-item-quantity-amount">
                                      {item.quantity}
                                    </span>
                                    <div className="cart-item-quantity-controller">
                                      <Link
                                        href="#"
                                        className="cart-increment"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          incrementQuantity(item.id);
                                        }}
                                      >
                                        <i className="far fa-caret-up" />
                                      </Link>
                                      <Link
                                        href="#"
                                        className="cart-decrement"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          decrementQuantity(item.id);
                                        }}
                                      >
                                        <i className="far fa-caret-down" />
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                                <td className="cart-item-price">
                                  <span className="total-price">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </span>
                                </td>
                                <td className="cart-item-remove">
                                  <Link
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      removeItem(item.id);
                                    }}
                                  >
                                    <i className="fas fa-times" />
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="cart-wrapper-footer">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            applyCoupon();
                          }}
                        >
                          <input
                            type="text"
                            name="promo-code"
                            id="promoCode"
                            placeholder="Coupon Code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            disabled={isCouponApplied}
                            style={{ color: "#000" }} // Ensure text color is visible
                          />
                          <button
                            type="submit"
                            className="theme-btn border-radius-none"
                            disabled={isCouponApplied}
                          >
                            {isCouponApplied ? "Applied" : "Apply Coupon"}
                          </button>
                        </form>
                        {/* If not needed, you can remove the "Update Cart" button */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6" />
                  <div className="col-xl-6">
                    <div className="cart-pragh-box">
                      <div className="cart-graph">
                        <h4>Cart Total</h4>
                        <ul>
                          <li>
                            <span>Subtotal</span>
                            <span>
                              $
                              {cartItems
                                .reduce(
                                  (total, item) =>
                                    total + item.price * item.quantity,
                                  0
                                )
                                .toFixed(2)}
                            </span>
                          </li>
                          {isCouponApplied && (
                            <li>
                              <span>
                                Discount ({discountPercentage}%)
                              </span>
                              <span>
                                -$
                                {(
                                  (cartItems.reduce(
                                    (total, item) =>
                                      total + item.price * item.quantity,
                                    0
                                  ) *
                                    discountPercentage) /
                                  100
                                ).toFixed(2)}
                              </span>
                            </li>
                          )}
                          <li>
                            <span>Shipping</span>
                            <span>
                              {cartItems.length > 0 ? "$10.00" : "$0.00"}
                            </span>
                          </li>
                          <li>
                            <span>Total</span>
                            <span>
                              $
                              {(
                                calculateCartTotal() +
                                (cartItems.length > 0 ? 10 : 0)
                              ).toFixed(2)}
                            </span>
                          </li>
                        </ul>
                        <div className="chck">
                          <Link
                            href="/checkout"
                            className="theme-btn border-radius-none"
                          >
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default page;
