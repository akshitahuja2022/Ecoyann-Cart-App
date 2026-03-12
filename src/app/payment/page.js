"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import OrderSummary from "@/components/OrderSummary";
import { toast } from "react-toastify";
import Link from "next/link";

export default function PaymentPage() {
  const {
    addresses,
    addAddress,
    form,
    setForm,
    cartItems,
    selectedAddress,
    setSelectedAddress,
  } = useContext(CartContext);

  const router = useRouter();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product_price * item.quantity,
    0,
  );

  const shipping = 50;

  const handlePayment = () => {
    if (!selectedAddress) {
      toast.error("Please select or add an address");
      return;
    }

    toast.success("Payment Successful!");

    setTimeout(() => {
      router.push("/success");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* MAIN SECTION */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* ADDRESS SECTION */}
        <div className="bg-slate-900 rounded-2xl p-8 shadow-md border">
          <h1 className="text-2xl font-bold mb-6 text-white">
            Shipping Address
          </h1>

          {/* SAVED ADDRESSES */}
          {addresses?.length ? (
            <div className="space-y-4">
              {addresses.map((addr, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedAddress(addr)}
                  className={`p-4 rounded-xl border cursor-pointer transition
  ${
    selectedAddress?.address === addr.address
      ? "border-emerald-500 bg-white text-black"
      : "border-gray-600 bg-slate-900 text-white hover:border-emerald-400"
  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      checked={selectedAddress?.address === addr.address}
                      readOnly
                      className="mt-1 accent-emerald-600"
                    />

                    <div>
                      <p className="font-semibold">{addr.name}</p>

                      <p className="text-sm">{addr.phone}</p>

                      <p className="text-sm mt-1">{addr.address}</p>

                      <p className="text-sm">
                        {addr.city}, {addr.state} - {addr.pin}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No saved addresses yet.</p>
          )}
          {/* ADD ADDRESS */}
          <div className="mt-8 border-t pt-6 bg-white p-4 rounded-2xl">
            <h3 className="font-semibold text-black mb-3">Add New Address</h3>

            <input
              placeholder="Enter full address..."
              className="border border-gray-300 p-3 w-full rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />

            <button
              onClick={addAddress}
              className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 transition"
            >
              Add Address
            </button>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-slate-900 rounded-2xl p-8 shadow-md border h-fit">
          <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>

          <OrderSummary subtotal={subtotal} shipping={shipping} />
        </div>
      </div>

      {/* STICKY BAR */}
      <div className="sticky bottom-0 h-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 justify-end items-center">
          <Link href="/">
            <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
              ← Back
            </button>
          </Link>

          <button
            onClick={handlePayment}
            className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Pay Securely →
          </button>
        </div>
      </div>
    </div>
  );
}
