"use client";

import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";

export default function CartInitializer({ items }) {
  const { setCartItems } = useContext(CartContext);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  return null;
}
