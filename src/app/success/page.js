export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 sm:p-8 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-600">
          Order Successful!
        </h1>

        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Thank you for your purchase.
        </p>

        <button className="mt-6 w-full sm:w-auto bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
