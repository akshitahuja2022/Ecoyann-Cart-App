"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CardProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [form, setForm] = useState({
    name: "",
  });

  return (
    <CartContext.Provider value={{ form, setForm, address, setAddress }}>
      {children}
    </CartContext.Provider>
  );
}
