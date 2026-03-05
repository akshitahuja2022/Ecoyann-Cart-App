"use client";

import { createContext, useState } from "react";

export const CartContext = createContext();

export function CardProvider({ children }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pinCode: "",
    city: "",
    state: "",
    address: "",
  });

  return (
    <CartContext.Provider value={{ form, setForm }}>
      {children}
    </CartContext.Provider>
  );
}
