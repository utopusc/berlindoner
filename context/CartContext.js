// context/CartContext.js
"use client";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Sepet verilerini `localStorage`'dan okumak için başlangıç değerini ayarlıyoruz
  const [cartItems, setCartItems] = useState([]);

  // Uygulama ilk yüklendiğinde `localStorage`'dan verileri okuyalım
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Sepet verileri her değiştiğinde `localStorage`'a kaydedelim
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

  // Toplam fiyat hesaplama
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
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
