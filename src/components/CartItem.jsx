export default function CartItem({ item }) {
  return (
    <div className="flex gap-4 border-2 border-gray-500 rounded-lg p-4 mb-4">
      <img src={item.image} className="rounded-md" width={140} />
      <div className="p-3">
        <h2 className="font-bold text-xl">{item.product_name}</h2>
        <p className="text-lg">₹{item.product_price}</p>
        <p className="text-lg">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
}
