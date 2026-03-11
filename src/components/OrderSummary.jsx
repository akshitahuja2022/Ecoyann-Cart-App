export default function OrderSummary({ subtotal, shipping }) {
  const total = subtotal + shipping;

  return (
    <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-xl p-4 sm:p-6 mt-6 bg-white text-black shadow-sm">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
        Order Summary
      </h2>

      <div className="flex justify-between text-sm sm:text-base mb-2">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between text-sm sm:text-base mb-2">
        <span>Shipping</span>
        <span>₹{shipping}</span>
      </div>

      <div className="border-t pt-3 mt-3 flex justify-between font-bold text-base sm:text-lg">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
}
