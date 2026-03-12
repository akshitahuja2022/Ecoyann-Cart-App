"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function AddressForm() {
  const { form, setForm, setAddresses } = useContext(CartContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.pin ||
      !form.city ||
      !form.state
    ) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      toast.error("Phone must be 10 digits");
      return;
    }

    setAddresses((prev) => {
      if (!form.address) return prev;

      const exists = prev?.some(
        (addr) =>
          addr.name === form.name &&
          addr.phone === form.phone &&
          addr.pin === form.pin &&
          addr.city === form.city &&
          addr.state === form.state &&
          addr.address === form.address,
      );

      if (exists) return prev;

      const updated = [...(prev || []), form];
      localStorage.setItem("userAddresses", JSON.stringify(updated));
      return updated;
    });
    localStorage.setItem("userAddress", JSON.stringify(form));
    router.push("/payment");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* FORM SECTION */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Shipping Address
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Enter your delivery details for secure checkout
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            autoCorrect="off"
          >
            {/* Full Name */}
            <input
              type="text"
              value={form.name}
              placeholder="Full Name"
              className="bg-slate-800 border border-gray-700 rounded-xl p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            {/* Email */}
            <input
              type="email"
              value={form.email}
              placeholder="Email Address"
              className="bg-slate-800 border border-gray-700 rounded-xl p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            {/* Phone */}
            <input
              type="tel"
              value={form.phone}
              placeholder="Phone Number"
              className="bg-slate-800 border border-gray-700 rounded-xl p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            {/* PIN + CITY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={form.pin}
                placeholder="PIN Code"
                className="bg-slate-800 border border-gray-700 rounded-xl p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                onChange={(e) => setForm({ ...form, pin: e.target.value })}
              />

              <input
                type="text"
                value={form.city}
                placeholder="City"
                className="bg-slate-800 border border-gray-700 rounded-xl p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </div>

            {/* State */}
            <input
              type="text"
              placeholder="State"
              value={form.state}
              className="bg-slate-800 border border-gray-700 rounded-xl p-3 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition"
              onChange={(e) => setForm({ ...form, state: e.target.value })}
            />
          </form>
        </div>
      </div>

      {/* STICKY ACTION BAR */}
      <div className="sticky bottom-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 justify-end items-center">
          {/* Back Button */}
          <Link href="/">
            <button className="px-6 py-3 rounded-xl text-white border border-gray-300 bg-emerald-600 hover:bg-slate-900 hover:text-white hover:font-bold cursor-pointer transition">
              ← Back
            </button>
          </Link>

          {/* Next Step */}
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-emerald-600 transition cursor-pointer"
          >
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
}
