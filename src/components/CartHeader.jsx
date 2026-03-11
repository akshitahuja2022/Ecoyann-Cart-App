import Link from "next/link";

export default function CartHeader({ itemCount }) {
  return (
    <header className="bg-white shadow-sm text-emerald-700">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center text-center flex-wrap gap-4">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Ecoyaan Checkout Flow
            </h1>

            <p className="text-gray-500 text-md mt-1">
              Review your items and proceed to secure checkout
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
