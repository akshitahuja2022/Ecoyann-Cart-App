"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function AddressForm() {
  const { form, setForm, setAddress } = useContext(CartContext);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    if (form.phone.length !== 10) {
      alert("Phone must be 10 digits");
      return;
    }

    setAddress(form);
    router.push("/payment");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md border-2 border-gray-500">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Enter Your Shipping Details
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoCorrect="off">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-500 rounded-lg p-3"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-500 rounded-lg p-3"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-500 rounded-lg p-3"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          {/* Grid for Pin + City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="PIN Code"
              className="border border-gray-500 rounded-lg p-3"
              onChange={(e) => setForm({ ...form, pin: e.target.value })}
            />

            <input
              type="text"
              placeholder="City"
              className="border border-gray-500 rounded-lg p-3"
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
          </div>

          <input
            type="text"
            placeholder="State"
            className="border border-gray-500 rounded-lg p-3"
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          />

          <button
            type="submit"
            className="bg-green-600 cursor-pointer hover:bg-green-700 transition text-white font-medium py-3 rounded-lg"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
