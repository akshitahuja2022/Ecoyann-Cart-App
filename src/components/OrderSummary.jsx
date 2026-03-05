export default function OrderSummary({ subtotal, shipping }) {
  const total = subtotal + shipping;

  return (
    <div className="border-2 border-gray-500 rounded-lg p-4 mt-6">
      <p className="text-lg">Subtotal: ₹{subtotal}</p>
      <p className="text-lg">Shipping: ₹{shipping}</p>
      <p className="font-bold text-lg mt-1">Total: ₹{total}</p>
    </div>
  );
}
