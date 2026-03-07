"use client";

import { createContext, useState } from "react";

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
