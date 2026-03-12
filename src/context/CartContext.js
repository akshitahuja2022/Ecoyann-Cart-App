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

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("userAddresses");

    if (saved) {
      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        setAddresses(parsed);
      } else {
        setAddresses([parsed]);
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("userAddresses", JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = () => {
    if (!form.address) return;

    setAddresses((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      return [...safePrev, { ...form }];
    });
    setSelectedAddress(form);
    setForm((prev) => ({
      ...prev,
      address: "",
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        form,
        setForm,
        addresses,
        addAddress,
        setAddresses,
        selectedAddress,
        setSelectedAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
