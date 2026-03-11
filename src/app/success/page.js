"use client";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-slate-900 shadow-md rounded-xl p-6 sm:p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Order Successful!
        </h1>

        <p className="mt-3 text-white text-sm sm:text-base">
          Thank you for your purchase.
        </p>

        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full sm:w-auto bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
