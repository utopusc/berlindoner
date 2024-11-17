// context/CartContext.js
"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Sepet verilerini `localStorage`'dan okumak için başlangıç değerini ayarlıyoruz
  const [cartItems, setCartItems] = useState([]);

  // Kupon kodu ve indirim durumu için state değişkenleri
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Uygulama ilk yüklendiğinde `localStorage`'dan verileri okuyalım
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedCouponCode = localStorage.getItem("couponCode");
    const storedIsCouponApplied = localStorage.getItem("isCouponApplied");
    const storedDiscountPercentage = localStorage.getItem("discountPercentage");

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    if (storedCouponCode) {
      setCouponCode(storedCouponCode);
    }
    if (storedIsCouponApplied) {
      setIsCouponApplied(JSON.parse(storedIsCouponApplied));
    }
    if (storedDiscountPercentage) {
      setDiscountPercentage(parseFloat(storedDiscountPercentage));
    }
  }, []);

  // Sepet verileri ve kupon bilgileri her değiştiğinde `localStorage`'a kaydedelim
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("couponCode", couponCode);
  }, [couponCode]);

  useEffect(() => {
    localStorage.setItem("isCouponApplied", JSON.stringify(isCouponApplied));
  }, [isCouponApplied]);

  useEffect(() => {
    localStorage.setItem("discountPercentage", discountPercentage.toString());
  }, [discountPercentage]);

  // Ürün ekleme fonksiyonu
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Ürün zaten sepette varsa miktarı artır
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Ürün sepette yoksa ekle
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Ürün kaldırma fonksiyonu
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Miktar güncelleme fonksiyonu
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  // Sepeti temizleme fonksiyonu
  const clearCart = () => {
    setCartItems([]);
    clearCoupon(); // Kupon bilgisini de temizle
  };

  // Kupon uygulama fonksiyonu
  const applyCoupon = (code, discount) => {
    setCouponCode(code);
    setDiscountPercentage(discount);
    setIsCouponApplied(true);
  };

  // Kuponu temizleme fonksiyonu
  const clearCoupon = () => {
    setCouponCode("");
    setDiscountPercentage(0);
    setIsCouponApplied(false);
  };

  // Toplam fiyat hesaplama fonksiyonu (indirimli)
  const calculateTotalPrice = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    if (isCouponApplied) {
      return subtotal - (subtotal * discountPercentage) / 100;
    }
    return subtotal;
  };

  // Toplam fiyat (indirim öncesi)
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        // Kupon ile ilgili değerler ve fonksiyonlar
        couponCode,
        isCouponApplied,
        discountPercentage,
        applyCoupon,
        clearCoupon,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
