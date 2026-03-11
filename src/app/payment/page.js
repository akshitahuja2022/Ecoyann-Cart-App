"use client";

import { useContext, useEffect } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import OrderSummary from "@/components/OrderSummary";
import { toast } from "react-toastify";
import Link from "next/link";

export default function PaymentPage() {
  const { address, form, setForm, cartItems } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    const address = JSON.parse(localStorage.getItem("userAddress"));
  }, []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  const shipping = 50;

  const handlePayment = () => {
    if (!form.address) {
      toast.error("Address Field Required");
      return;
    }

    toast.success("Payment Successful!");

    setTimeout(() => {
      router.push("/success");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* MAIN CONTENT */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-8">
        {/* SHIPPING DETAILS */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-2xl font-semibold mb-6">Confirm Your Order</h1>

          <div className="bg-white rounded-2xl text-black p-5 mb-6">
            <h2 className="font-semibold text-lg mb-4">Shipping Address</h2>

            <div className="text-sm text-black space-y-1 mb-4">
              <p>{address?.name}</p>
              <p>{address?.email}</p>
              <p>{address?.phone}</p>
              <p>
                {address?.city}, {address?.state} - {address?.pin}
              </p>
            </div>

            <label className="text-sm text-black mb-2 block">
              Full Address
            </label>

            <input
              type="text"
              placeholder="Enter complete delivery address..."
              className="bg-slate-700 border border-gray-600 rounded-lg p-3 w-full text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-lg h-fit">
          <div className="bg-slate-900 rounded-4xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-8">
              Order Summary
            </h3>

            <OrderSummary subtotal={subtotal} shipping={shipping} />
          </div>
        </div>
      </div>

      {/* STICKY PAYMENT BAR */}
      <div className="sticky bottom-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 justify-end items-center">
          {/* Back */}
          <Link href="/">
            <button className="px-6 py-3 rounded-xl text-white border border-gray-300 bg-emerald-600 hover:bg-slate-900 hover:text-white hover:font-bold cursor-pointer transition">
              ← Back
            </button>
          </Link>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="px-8 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition cursor-pointer"
          >
            Pay Securely →
          </button>
        </div>
      </div>
    </div>
  );
}
