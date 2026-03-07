export default function CartItem({ item }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-gray-300 rounded-xl p-4 mb-4 bg-white shadow-sm">
      <img
        src={item.image}
        alt={item.product_name}
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-md object-cover"
      />

      <div className="flex flex-col text-center sm:text-left">
        <h2 className="font-bold text-base sm:text-lg md:text-xl">
          {item.product_name}
        </h2>

        <p className="text-gray-700 text-sm sm:text-base mt-1">
          ₹{item.product_price}
        </p>

        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Quantity: {item.quantity}
        </p>
      </div>
    </div>
  );
}
