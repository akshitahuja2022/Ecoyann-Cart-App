"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pin: "",
    city: "",
    state: "",
  });

  const [address, setAddress] = useState(null);

  useEffect(() => {
    const savedAddress = localStorage.getItem("userAddress");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

  useEffect(() => {
    if (address) {
      localStorage.setItem("userAddress", JSON.stringify(address));
    }
  }, [address]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        form,
        setForm,
        address,
        setAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
