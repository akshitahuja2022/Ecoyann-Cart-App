"use client";

import AddressForm from "@/components/AddressForm";

export default function CheckoutPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Shipping Address</h1>
      <AddressForm />
    </div>
  );
}
