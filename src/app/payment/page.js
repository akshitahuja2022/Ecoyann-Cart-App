"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import OrderSummary from "@/components/OrderSummary";
import { toast } from "react-toastify";

export default function PaymentPage() {
  const { address, form, setForm, cartItems } = useContext(CartContext);
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  const shipping = 50;

  const handlePayment = () => {
    toast.success("Payment Successful!");
    setTimeout(() => {
      router.push("/success");
    }, 1500);
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg p-4 sm:p-6 mt-6 bg-white shadow-sm">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
          Confirm Your Order
        </h1>

        <div className="border border-gray-300 rounded-lg p-4 sm:p-5 mb-6 shadow-sm">
          <h2 className="font-semibold text-base sm:text-lg mb-3">
            Shipping Address
          </h2>

          <div className="text-sm sm:text-base text-gray-700 space-y-1">
            <p>{address?.name}</p>
            <p>{address?.email}</p>
            <p>{address?.phone}</p>
            <p className="mb-2">
              {address?.city}, {address?.state} - {address?.pin}
            </p>
            <label className="font-semibold text-lg" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter the shipping address..."
              className="border mb-2 border-gray-400 rounded-lg p-3 text-sm sm:text-base w-full"
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
        </div>

        <OrderSummary subtotal={subtotal} shipping={shipping} />

        <div className="flex justify-center">
          <button
            onClick={handlePayment}
            className="bg-green-600 text-white text-lg font-semibold px-4 py-2 mt-8 rounded-md cursor-pointer"
          >
            Pay Securely
          </button>
        </div>
      </div>
    </>
  );
}
